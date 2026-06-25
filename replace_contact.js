const fs = require('fs');
let html = fs.readFileSync('/Users/andrei.lepsch/apps/Autoridade Despachante/index.html', 'utf8');

const oldContactStart = html.indexOf('<!-- CONTACT -->');
const oldContactEnd = html.indexOf('<!-- FOOTER -->');
const oldContact = html.substring(oldContactStart, oldContactEnd);

const newContact = `<!-- CONTACT -->
        <section id="contato" class="py-20 bg-white">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Agende Seu Atendimento Gratuito</h2>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto">Em poucos minutos, nossa equipe fará uma análise completa do seu caso e enviará um orçamento sem compromisso.</p>
                    <div class="mt-6 flex flex-wrap justify-center gap-4">
                        <div class="flex items-center gap-2 text-sm text-gray-600">
                            <svg class="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                            100% Gratuito
                        </div>
                        <div class="flex items-center gap-2 text-sm text-gray-600">
                            <svg class="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                            Sem Compromisso
                        </div>
                        <div class="flex items-center gap-2 text-sm text-gray-600">
                            <svg class="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                            Resposta em 24h
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
                    <!-- Form -->
                    <div class="bg-gray-50 rounded-2xl shadow-xl p-8 border-2 border-gray-100">
                        <div class="mb-6">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Preencha o formulário abaixo</h3>
                            <p class="text-sm text-gray-600">Nossa equipe entrará em contato em até 24h úteis para iniciar seu atendimento</p>
                        </div>
                        <form id="contact-form" class="space-y-6" onsubmit="event.preventDefault(); alert('Formulário enviado com sucesso!');">
                            <div>
                                <label class="block text-xs font-medium text-gray-700 mb-2">Nome Completo *</label>
                                <input type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold bg-white text-gray-900" placeholder="Como podemos te chamar?">
                            </div>
                            <div>
                                <label class="block text-xs font-medium text-gray-700 mb-2">E-mail *</label>
                                <input type="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold bg-white text-gray-900" placeholder="seu.email@exemplo.com">
                            </div>
                            <div>
                                <label class="block text-xs font-medium text-gray-700 mb-2">WhatsApp *</label>
                                <input type="tel" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold bg-white text-gray-900" placeholder="(00) 00000-0000">
                            </div>
                            <div>
                                <label class="block text-xs font-medium text-gray-700 mb-2">Mensagem *</label>
                                <textarea required rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold bg-white text-gray-900" placeholder="Como podemos ajudar?"></textarea>
                            </div>
                            <button type="submit" class="w-full bg-gold text-white px-6 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all text-sm shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                                Solicitar Orçamento Grátis →
                            </button>
                            <p class="text-xs text-gray-500 text-center">Ao enviar, você concorda em receber o contato da nossa equipe para dar andamento à sua solicitação.</p>
                        </form>
                    </div>

                    <!-- Contact Info -->
                    <div class="space-y-8 self-start">
                        <div class="max-w-4xl mx-auto bg-gold/10 border-2 border-gold/30 rounded-xl p-6 text-center">
                            <p class="text-sm text-gray-800"><span class="font-bold">⏰ Atenção:</span> Devido à alta procura, nosso tempo de resposta pode variar. <br />Garanta sua vaga na fila de atendimento enviando a mensagem agora!</p>
                        </div>
                        <div class="bg-gradient-to-br from-gray-900 to-[#0b1120] rounded-2xl shadow-xl p-8 text-white">
                            <h3 class="text-xl font-bold mb-6">O que você ganha com nosso atendimento:</h3>
                            <div class="space-y-4">
                                <div class="flex items-start gap-3">
                                    <svg class="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                                    <div><p class="font-semibold text-sm">Análise Documental Completa</p><p class="text-xs text-gray-400 mt-1">Verificação detalhada de pendências e débitos do seu patrimônio</p></div>
                                </div>
                                <div class="flex items-start gap-3">
                                    <svg class="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                                    <div><p class="font-semibold text-sm">Orçamento Transparente</p><p class="text-xs text-gray-400 mt-1">Custos exatos e sem surpresas ocultas no meio do processo</p></div>
                                </div>
                                <div class="flex items-start gap-3">
                                    <svg class="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                                    <div><p class="font-semibold text-sm">Plano de Ação Ágil</p><p class="text-xs text-gray-400 mt-1">Passo a passo do que fazer para regularizar sua documentação rápido</p></div>
                                </div>
                                <div class="flex items-start gap-3">
                                    <svg class="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                                    <div><p class="font-semibold text-sm">Tranquilidade e Segurança</p><p class="text-xs text-gray-400 mt-1">Seu patrimônio nas mãos de especialistas credenciados pelo CRDD</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        `;

html = html.replace(oldContact, newContact);
fs.writeFileSync('/Users/andrei.lepsch/apps/Autoridade Despachante/index.html', html);
