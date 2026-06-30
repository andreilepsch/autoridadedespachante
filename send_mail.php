<?php
/**
 * send_mail.php — Autoridade Despachante
 * Processa o formulário de contato e envia e-mail via SMTP (PHPMailer)
 *
 * REQUISITOS:
 * - PHPMailer instalado via Composer: composer require phpmailer/phpmailer
 * - OU faça upload manual da pasta PHPMailer em: /PHPMailer/src/
 *
 * CONFIGURAÇÃO:
 * Preencha as constantes abaixo com os dados do seu e-mail SMTP.
 */

// ============================================================
// ⚙️  CONFIGURAÇÕES HOSTINGER — Edite apenas esta seção
// ============================================================
define('SMTP_HOST', 'smtp.hostinger.com');                  // Servidor SMTP da Hostinger
define('SMTP_PORT', 587);                                    // 465 para SSL (recomendado Hostinger)
define('SMTP_USER', 'contato@autoridadedespachante.com.br');// E-mail de envio (Hostinger)
define('SMTP_PASS', 'Ar@110827');                      // ← Senha do e-mail na Hostinger
define('MAIL_FROM', 'contato@autoridadedespachante.com.br');// Remetente
define('MAIL_FROM_NAME', 'Autoridade Despachante');               // Nome exibido no e-mail
define('MAIL_TO', 'contato@autoridadedespachante.com.br');// ← E-mail que receberá os contatos
define('SITE_URL', 'index.php#contato');                    // URL de retorno (com âncora para voltar ao formulário)
// ============================================================

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$phpmailerDisponivel = false;

if (file_exists(__DIR__ . '/PHPMailer/PHPMailer.php')) {
    // Inclua os arquivos do PHPMailer conforme o painel da Hostinger
    require __DIR__ . '/PHPMailer/Exception.php';
    require __DIR__ . '/PHPMailer/PHPMailer.php';
    require __DIR__ . '/PHPMailer/SMTP.php';
    $phpmailerDisponivel = true;
} elseif (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require __DIR__ . '/vendor/autoload.php';
    $phpmailerDisponivel = true;
}

// Só aceita POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ' . SITE_URL);
    exit;
}

// Sanitiza entradas
function limpar($valor)
{
    return htmlspecialchars(strip_tags(trim($valor)), ENT_QUOTES, 'UTF-8');
}

$nome = limpar($_POST['nome'] ?? '');
$email = limpar($_POST['email'] ?? '');
$telefone = limpar($_POST['telefone'] ?? '');
$servico = limpar($_POST['servico'] ?? 'Não informado');
$mensagem = limpar($_POST['mensagem'] ?? '');

$isAjax = !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';

// ── Verificação Anti-Spam (Honeypot e Math Captcha) ──
$honeypot = $_POST['telefone_secundario'] ?? '';
if (!empty($honeypot)) {
    // Se o campo invisível foi preenchido, é um bot. Fingimos sucesso para enganá-lo.
    if ($isAjax) {
        echo json_encode(['status' => 'ok']);
        exit;
    }
    header('Location: ' . SITE_URL . '?status=ok');
    exit;
}

$captcha_answer = limpar($_POST['captcha_answer'] ?? '');
$captcha_hash = $_POST['captcha_hash'] ?? '';
if (md5($captcha_answer . 'autdesp2026') !== $captcha_hash) {
    if ($isAjax) {
        echo json_encode(['status' => 'erro', 'msg' => 'A resposta da pergunta Anti-Spam (soma) está incorreta.']);
        exit;
    }
    header('Location: ' . SITE_URL . '?status=erro&msg=captcha_invalido');
    exit;
}
// ─────────────────────────────────────────────────────

// Validação básica
if (empty($nome) || empty($email) || empty($telefone) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    if ($isAjax) {
        echo json_encode(['status' => 'erro', 'msg' => 'Campos inválidos']);
        exit;
    }
    header('Location: ' . SITE_URL . '?status=erro&msg=campos_invalidos');
    exit;
}

// ── Corpo do e-mail (para você) ──────────────────────────────
$corpoAdmin = "
<html><body style='font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f9fafb;'>
    <div style='max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);'>
        <div style='padding: 40px 40px 30px 40px;'>
            <div style='text-align: center; margin-bottom: 40px;'>
                <img src='https://autoridadedespachante.com.br/assets/images/logo-horiz-positive.svg' alt='Autoridade Despachante' style='height: 48px;'>
            </div>
            <table style='width: 100%; border-collapse: collapse;'>
                <tr><td style='padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 130px; color: #232323;'>Nome</td><td style='padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #4b5563;'>{$nome}</td></tr>
                <tr><td style='padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #232323;'>E-mail</td><td style='padding: 12px 0; border-bottom: 1px solid #f0f0f0;'><a href='mailto:{$email}' style='color: #1F4E78; text-decoration: none;'>{$email}</a></td></tr>
                <tr><td style='padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #232323;'>Telefone</td><td style='padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #4b5563;'>{$telefone}</td></tr>
                <tr><td style='padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #232323;'>Serviço</td><td style='padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #4b5563;'>{$servico}</td></tr>
                <tr><td style='padding: 12px 0; font-weight: bold; vertical-align: top; color: #232323;'>Mensagem</td><td style='padding: 12px 0; color: #4b5563;'>" . nl2br($mensagem) . "</td></tr>
            </table>
        </div>
        <div style='background: #f3f4f6; padding: 15px 30px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb;'>
            Enviado em: " . date('d/m/Y H:i:s') . " | Autoridade Despachante — Brasília/DF
        </div>
    </div>
</body></html>
";

// ── Cópia para o cliente ─────────────────────────────────────
$corpoCliente = "
<html><body style='font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f9fafb;'>
    <div style='max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);'>
        <div style='padding: 40px 40px 30px 40px;'>
            <div style='text-align: center; margin-bottom: 50px;'>
                <img src='https://autoridadedespachante.com.br/assets/images/logo-horiz-positive.svg' alt='Autoridade Despachante' style='height: 48px;'>
            </div>
            <p style='font-size: 16px; color: #4b5563;'>Olá, <strong style='color: #232323;'>{$nome}</strong>!</p>
            <p style='font-size: 16px; color: #4b5563; line-height: 1.5;'>Nossa equipe recebeu sua mensagem e em breve entraremos em contato com você para darmos continuidade ao atendimento.</p>
            
            <div style='margin-top: 25px; padding: 20px; background: #fdfbf7; border-left: 4px solid #C9A84C; border-radius: 4px;'>
                <p style='margin: 0 0 10px 0; color: #4b5563;'><strong>Serviço de interesse:</strong> {$servico}</p>
                <p style='margin: 0; color: #4b5563;'><strong>Sua mensagem:</strong><br><br>" . nl2br($mensagem) . "</p>
            </div>
            
            <p style='margin-top: 25px; font-size: 16px; color: #4b5563;'>Caso prefira um atendimento mais imediato, basta nos chamar no WhatsApp no botão abaixo:</p>
            <div style='text-align: center; margin-top: 25px;'>
                <a href='https://wa.me/5561986250267' style='display: inline-block; background: #25D366; color: #ffffff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px; box-shadow: 0 2px 4px rgba(37,211,102,0.3);'>
                    Falar no WhatsApp agora
                </a>
            </div>
        </div>
        <div style='background: #f3f4f6; padding: 15px 30px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb;'>
            Autoridade Despachante — Brasília/DF | <a href='https://autoridadedespachante.com.br' style='color: #1F4E78; text-decoration: none;'>autoridadedespachante.com.br</a>
        </div>
    </div>
</body></html>
";

// ── Envio ────────────────────────────────────────────────────
try {
    if ($phpmailerDisponivel) {
        // ── Via PHPMailer (SMTP) ──
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = SMTP_HOST;
        $mail->SMTPAuth = true;
        $mail->Username = SMTP_USER;
        $mail->Password = SMTP_PASS;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = SMTP_PORT;
        $mail->CharSet = 'UTF-8';
        $mail->setFrom(MAIL_FROM, MAIL_FROM_NAME);
        $mail->addAddress(MAIL_TO, 'Autoridade Despachante');
        $mail->addReplyTo($email, $nome);
        $mail->isHTML(true);
        $mail->Subject = "=?UTF-8?B?" . base64_encode("Novo Contato: {$nome} - {$servico}") . "?=";
        $mail->Body = $corpoAdmin;
        $mail->send();

        // Cópia para o cliente
        $mc = new PHPMailer(true);
        $mc->isSMTP();
        $mc->Host = SMTP_HOST;
        $mc->SMTPAuth = true;
        $mc->Username = SMTP_USER;
        $mc->Password = SMTP_PASS;
        $mc->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mc->Port = SMTP_PORT;
        $mc->CharSet = 'UTF-8';
        $mc->setFrom(MAIL_FROM, MAIL_FROM_NAME);
        $mc->addAddress($email, $nome);
        $mc->isHTML(true);
        $mc->Subject = "=?UTF-8?B?" . base64_encode("Autoridade Despachante - Recebemos sua solicitacao!") . "?=";
        $mc->Body = $corpoCliente;
        $mc->send();

    } else {
        // ── Fallback falho: Se cair aqui, a biblioteca não foi encontrada ──
        if ($isAjax) {
            echo json_encode(['status' => 'erro', 'msg' => 'PHPMailer não encontrado.']);
            exit;
        }
        die("<h2>Erro no Servidor</h2><p>A biblioteca PHPMailer não foi encontrada no caminho <b>/PHPMailer/PHPMailer.php</b>. Verifique se a pasta foi enviada corretamente para a raiz do site no painel da Hostinger.</p>");
    }

    if ($isAjax) {
        echo json_encode(['status' => 'ok']);
        exit;
    }
    header('Location: ' . SITE_URL . '?status=ok');
    exit;

} catch (Exception $e) {
    if ($isAjax) {
        echo json_encode(['status' => 'erro', 'msg' => $e->getMessage()]);
        exit;
    }
    die("<h2>Erro de Envio (PHPMailer)</h2><p>O PHPMailer foi encontrado, mas houve um erro ao enviar: " . $e->getMessage() . "</p><p>Verifique a porta, senha e usuário SMTP.</p>");
}
