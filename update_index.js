const fs = require('fs');

const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Autoridade Despachante | Brasília - DF</title>
    <meta name="description" content="Sua Solução Completa para Documentação Veicular e Imobiliária em Brasília/DF. Agilidade, segurança e experiência.">
    <meta name="keywords" content="despachante Brasília, Detran DF, regularização veículo, despachante imobiliário, licenciamento, transferência">
    <link rel="stylesheet" href="styles.css?v=1">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&display=swap" rel="stylesheet">
    <!-- FontAwesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="script.js" defer></script>
</head>
<body class="antialiased font-sans bg-white text-gray-900">
    <div class="size-full">
        <!-- HEADER -->
        <header id="header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
            <nav class="container mx-auto px-4 py-3">
                <div class="flex items-center justify-between">
                    <a href="#" class="flex-shrink-0" onclick="window.scrollTo({ top: 0, behavior: 'smooth' }); return false;">
                        <img src="assets/images/logo-horiz-negative.svg" alt="Autoridade Despachante" class="h-9 w-auto" id="logo-img">
                    </a>

                    <!-- Desktop Nav -->
                    <div class="hidden lg:flex items-center space-x-8">
                        <button onclick="scrollToSection('inicio')" class="nav-link transition-colors font-medium text-white hover:text-gold" style="font-size: 16px;">Início</button>
                        <button onclick="scrollToSection('sobre')" class="nav-link transition-colors font-medium text-white hover:text-gold" style="font-size: 16px;">Sobre Nós</button>
                        <button onclick="scrollToSection('servicos')" class="nav-link transition-colors font-medium text-white hover:text-gold" style="font-size: 16px;">Serviços</button>
                        <button onclick="scrollToSection('como-funciona')" class="nav-link transition-colors font-medium text-white hover:text-gold" style="font-size: 16px;">Como Funciona</button>
                        <button onclick="scrollToSection('faq')" class="nav-link transition-colors font-medium text-white hover:text-gold" style="font-size: 16px;">FAQ</button>
                        <a href="https://wa.me/5561986250267" target="_blank" class="bg-gold text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-center flex items-center gap-2" style="font-size: 16px;">
                            <i class="fa-brands fa-whatsapp"></i> Fale Conosco
                        </a>
                    </div>

                    <!-- Mobile Toggle -->
                    <button id="mobile-menu-btn" class="lg:hidden transition-colors text-white" aria-label="Toggle menu">
                        <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16" id="menu-icon" />
                        </svg>
                    </button>
                </div>

                <!-- Mobile Menu -->
                <div id="mobile-menu" class="hidden lg:hidden mt-4 pb-4 space-y-4">
                    <button onclick="scrollToSection('inicio')" class="block w-full text-left transition-colors py-2 text-white hover:text-gold" style="font-size: 16px;">Início</button>
                    <button onclick="scrollToSection('sobre')" class="block w-full text-left transition-colors py-2 text-white hover:text-gold" style="font-size: 16px;">Sobre Nós</button>
                    <button onclick="scrollToSection('servicos')" class="block w-full text-left transition-colors py-2 text-white hover:text-gold" style="font-size: 16px;">Serviços</button>
                    <button onclick="scrollToSection('como-funciona')" class="block w-full text-left transition-colors py-2 text-white hover:text-gold" style="font-size: 16px;">Como Funciona</button>
                    <button onclick="scrollToSection('faq')" class="block w-full text-left transition-colors py-2 text-white hover:text-gold" style="font-size: 16px;">FAQ</button>
                    <a href="https://wa.me/5561986250267" target="_blank" class="block w-full bg-gold text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-center flex items-center justify-center gap-2" style="font-size: 16px;">
                        <i class="fa-brands fa-whatsapp"></i> Fale Conosco
                    </a>
                </div>
            </nav>
        </header>

        <!-- HERO -->
        <section id="inicio" class="relative h-screen flex items-center justify-center text-white overflow-hidden">
            <div class="absolute inset-0">
                <!-- Using a solid dark bg as placeholder until they provide hero-bg or we use the dark gradient -->
                <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
            </div>
            
            <div class="absolute inset-0 overflow-hidden">
                <div class="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 1000ms;"></div>
            </div>

            <div class="container mx-auto px-4 relative z-10">
                <div class="max-w-4xl mx-auto animate-fade-in-up">
                    <h1 class="font-bold mb-6 leading-tight drop-shadow-2xl" style="font-size: clamp(20px, 4vw, 44px);">
                        Sua Solução Completa para Documentação
                        <br />
                        <span class="text-gold relative inline-block mt-2" style="font-size: 1.5em; line-height: 1.1;">
                            Veicular e Imobiliária.
                            <svg class="absolute -bottom-2 left-0 w-full h-3 text-gold/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0,8 Q25,2 50,5 T100,3" stroke="currentColor" stroke-width="2" fill="none" />
                            </svg>
                        </span>
                    </h1>
                    <p class="mb-8 text-gray-100 leading-relaxed drop-shadow-lg max-w-3xl" style="font-size: clamp(14px, 1.5vw, 20px);">
                        Agilidade, segurança e experiência para indivíduos e empresas em Brasília/DF. Cuidamos da burocracia para você focar no que importa.
                    </p>
                    
                    <div class="flex flex-col md:flex-row gap-4 mb-12 w-full">
                        <a href="https://wa.me/5561986250267" target="_blank" class="md:w-auto bg-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-xl text-center" style="font-size: clamp(12px, 2vw, 16px);">
                            Fale Conosco Agora →
                        </a>
                        <button onclick="scrollToSection('contato')" class="md:w-auto bg-transparent border-2 border-white/80 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all backdrop-blur-sm text-center" style="font-size: clamp(12px, 2vw, 16px);">
                            Solicite um Orçamento Grátis
                        </button>
                    </div>
                    
                    <div class="mt-6 md:mt-12 flex flex-row justify-between gap-2 md:gap-6 text-center w-full">
                        <div class="flex-1 min-w-0 bg-white/10 backdrop-blur-md rounded-xl py-4 px-1 md:p-6 border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105 shadow-xl flex flex-col justify-center items-center">
                            <div class="text-gold mb-2 text-3xl"><i class="fa-solid fa-shield-halved"></i></div>
                            <div class="text-gray-200 font-medium leading-tight text-sm md:text-base">Credenciados CRDD-DF & Detran-DF</div>
                        </div>
                        <div class="flex-1 min-w-0 bg-white/10 backdrop-blur-md rounded-xl py-4 px-1 md:p-6 border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105 shadow-xl flex flex-col justify-center items-center">
                            <div class="text-gold mb-2 text-3xl"><i class="fa-solid fa-bolt"></i></div>
                            <div class="text-gray-200 font-medium leading-tight text-sm md:text-base">Atendimento Ágil e Online</div>
                        </div>
                        <div class="flex-1 min-w-0 bg-white/10 backdrop-blur-md rounded-xl py-4 px-1 md:p-6 border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105 shadow-xl flex flex-col justify-center items-center">
                            <div class="text-gold mb-2 text-3xl"><i class="fa-solid fa-star"></i></div>
                            <div class="text-gray-200 font-medium leading-tight text-sm md:text-base">Clientes 100% Satisfeitos</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <svg class="w-6 h-6 text-white/70" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </section>

        <!-- SERVIÇOS -->
        <section id="servicos" class="py-20 bg-gray-50">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serviços Rápidos e Seguros</h2>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto">Atendimento completo para quem busca eficiência na regularização do seu patrimônio.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Veicular -->
                    <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 min-w-0 text-center">
                        <div class="text-gold mb-6 flex justify-center text-5xl">
                            <i class="fa-solid fa-car"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Serviços Veiculares</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">Resolvemos toda a burocracia do seu veículo de forma rápida. De licenciamento a transferência de propriedade, pagamento de impostos e baixa de gravames.</p>
                    </div>
                    <!-- Imobiliário -->
                    <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 min-w-0 text-center">
                        <div class="text-gold mb-6 flex justify-center text-5xl">
                            <i class="fa-solid fa-house"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Serviços Imobiliários</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">Assessoria completa na documentação do seu imóvel. Compras, vendas, regularização, escritura e registro em cartório no DF.</p>
                    </div>
                    <!-- Exterior -->
                    <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 min-w-0 text-center">
                        <div class="text-gold mb-6 flex justify-center text-5xl">
                            <i class="fa-solid fa-earth-americas"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Brasileiros no Exterior</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">Atendimento 100% online especializado para quem mora fora do Brasil e precisa de representação legal e regularização de patrimônio no DF.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SOBRE NÓS -->
        <section id="sobre" class="py-20 bg-gray-900 text-white relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800"></div>
            <div class="container mx-auto px-4 relative z-10">
                <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div class="w-full md:w-1/2">
                        <span class="text-gold font-semibold uppercase tracking-wider text-sm mb-2 block">Quem Somos</span>
                        <h2 class="text-3xl md:text-4xl font-bold mb-6">Experiência que Transmite <span class="text-gold">Confiança</span></h2>
                        <p class="text-gray-300 mb-4 leading-relaxed">A Autoridade Despachante nasceu com a missão de descomplicar processos burocráticos. Com foco em Brasília/DF, ajudamos indivíduos e empresas a regularizarem documentos de forma ágil e segura.</p>
                        <p class="text-gray-300 mb-8 leading-relaxed">Nossa equipe é formada por profissionais altamente qualificados e credenciados. Trabalhamos pautados pela ética e transparência para garantir a melhor experiência para os nossos clientes, incluindo Brasileiros que residem no exterior.</p>
                        
                        <div class="flex gap-8">
                            <div>
                                <div class="text-3xl font-bold text-gold mb-1">CRDD-DF</div>
                                <div class="text-sm text-gray-400">Credenciamento Oficial</div>
                            </div>
                            <div>
                                <div class="text-3xl font-bold text-gold mb-1">Detran-DF</div>
                                <div class="text-sm text-gray-400">Parceria Autorizada</div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 flex justify-center">
                        <div class="bg-white/5 border border-white/10 rounded-2xl p-12 text-center text-8xl text-gold/30">
                            <i class="fa-solid fa-building-columns"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- COMO FUNCIONA -->
        <section id="como-funciona" class="py-20 bg-gray-800 text-white">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <span class="text-gold font-semibold uppercase tracking-wider text-sm mb-2 block">Processo Simplificado</span>
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Como Contratar Nossos Serviços?</h2>
                    <p class="text-lg text-gray-300 max-w-2xl mx-auto">Resolvemos sua documentação em 5 passos simples, sem dor de cabeça.</p>
                </div>
                <div class="force-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 place-items-stretch max-w-6xl mx-auto">
                    <article class="col-span-1 bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/10 flex flex-col">
                        <div class="mb-4 text-gold text-4xl font-bold">1</div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-white mb-3">Contato Inicial</h3>
                            <p class="text-gray-300 leading-relaxed text-sm">Fale conosco pelo WhatsApp, formulário ou telefone, explicando sua necessidade.</p>
                        </div>
                    </article>
                    <article class="col-span-1 bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/10 flex flex-col">
                        <div class="mb-4 text-gold text-4xl font-bold">2</div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-white mb-3">Análise e Orçamento</h3>
                            <p class="text-gray-300 leading-relaxed text-sm">Analisamos seu caso e enviamos um orçamento detalhado e transparente.</p>
                        </div>
                    </article>
                    <article class="col-span-1 bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/10 flex flex-col">
                        <div class="mb-4 text-gold text-4xl font-bold">3</div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-white mb-3">Envio de Documentos</h3>
                            <p class="text-gray-300 leading-relaxed text-sm">Orientações claras para o envio da documentação de forma totalmente segura.</p>
                        </div>
                    </article>
                    <article class="col-span-1 bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/10 flex flex-col">
                        <div class="mb-4 text-gold text-4xl font-bold">4</div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-white mb-3">Acompanhamento</h3>
                            <p class="text-gray-300 leading-relaxed text-sm">Você será informado ativamente sobre o andamento de todo o processo.</p>
                        </div>
                    </article>
                    <article class="col-span-1 bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/10 flex flex-col md:col-start-1 lg:col-start-2">
                        <div class="mb-4 text-gold text-4xl font-bold">5</div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-white mb-3">Entrega Final</h3>
                            <p class="text-gray-300 leading-relaxed text-sm">Receba seus documentos finalizados e regularizados com total conforto.</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- DEPOIMENTOS (CSS Marquee) -->
        <section id="depoimentos" class="py-20 bg-gray-900 text-white overflow-hidden">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
                </div>
                <!-- CSS Marquee Testimonials -->
                <div class="flex justify-center gap-6 mt-10 max-h-[740px] overflow-hidden relative" style="-webkit-mask-image: linear-gradient(to bottom, transparent, black 25%, black 75%, transparent); mask-image: linear-gradient(to bottom, transparent, black 25%, black 75%, transparent);">
                    
                    <!-- Col 1 -->
                    <div class="flex flex-col gap-6 pb-6 w-full max-w-sm marquee-col" style="--duration: 15s;">
                        <div class="flex flex-col gap-6 marquee-inner">
                            <div class="p-8 border border-white/5 bg-[#0f172a] rounded-3xl shadow-lg">
                                <div class="text-gray-300 leading-relaxed text-[15px]">Achava que precisava de muito dinheiro para investir em imóveis. Comecei com R$ 4.500/mês e em 4 anos já tenho R$ 18 mil de renda passiva. Vou me aposentar aos 50.</div>
                                <div class="flex items-center gap-4 mt-6">
                                    <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" class="w-12 h-12 rounded-full object-cover shadow-sm" />
                                    <div class="flex flex-col"><div class="font-semibold text-white text-[15px]">André Oliveira</div><div class="text-sm text-gray-400">Médico ortopedista • 46 anos</div></div>
                                </div>
                            </div>
                            <div class="p-8 border border-white/5 bg-[#0f172a] rounded-3xl shadow-lg">
                                <div class="text-gray-300 leading-relaxed text-[15px]">Meu marido ficou desempregado, mas nossa renda passiva de R$ 12 mil/mês nos salvou. Imóveis são o único investimento que não some em crise.</div>
                                <div class="flex items-center gap-4 mt-6">
                                    <img src="https://i.pravatar.cc/150?img=5" alt="Avatar" class="w-12 h-12 rounded-full object-cover shadow-sm" />
                                    <div class="flex flex-col"><div class="font-semibold text-white text-[15px]">Juliana Ferreira</div><div class="text-sm text-gray-400">Advogada • 44 anos</div></div>
                                </div>
                            </div>
                            <div class="p-8 border border-white/5 bg-[#0f172a] rounded-3xl shadow-lg">
                                <div class="text-gray-300 leading-relaxed text-[15px]">Meu pai perdeu tudo na bolsa em 2008. Aprendi que imóvel é patrimônio real. Construí R$ 2,8 milhões em 6 anos investindo R$ 3.800/mês.</div>
                                <div class="flex items-center gap-4 mt-6">
                                    <img src="https://i.pravatar.cc/150?img=12" alt="Avatar" class="w-12 h-12 rounded-full object-cover shadow-sm" />
                                    <div class="flex flex-col"><div class="font-semibold text-white text-[15px]">Gustavo Pereira</div><div class="text-sm text-gray-400">Contador • 43 anos</div></div>
                                </div>
                            </div>
                            <!-- Duplicata para Loop -->
                            <div class="p-8 border border-white/5 bg-[#0f172a] rounded-3xl shadow-lg">
                                <div class="text-gray-300 leading-relaxed text-[15px]">Achava que precisava de muito dinheiro para investir em imóveis. Comecei com R$ 4.500/mês e em 4 anos já tenho R$ 18 mil de renda passiva. Vou me aposentar aos 50.</div>
                                <div class="flex items-center gap-4 mt-6">
                                    <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" class="w-12 h-12 rounded-full object-cover shadow-sm" />
                                    <div class="flex flex-col"><div class="font-semibold text-white text-[15px]">André Oliveira</div><div class="text-sm text-gray-400">Médico ortopedista • 46 anos</div></div>
                                </div>
                            </div>
                            <div class="p-8 border border-white/5 bg-[#0f172a] rounded-3xl shadow-lg">
                                <div class="text-gray-300 leading-relaxed text-[15px]">Meu marido ficou desempregado, mas nossa renda passiva de R$ 12 mil/mês nos salvou. Imóveis são o único investimento que não some em crise.</div>
                                <div class="flex items-center gap-4 mt-6">
                                    <img src="https://i.pravatar.cc/150?img=5" alt="Avatar" class="w-12 h-12 rounded-full object-cover shadow-sm" />
                                    <div class="flex flex-col"><div class="font-semibold text-white text-[15px]">Juliana Ferreira</div><div class="text-sm text-gray-400">Advogada • 44 anos</div></div>
                                </div>
                            </div>
                            <div class="p-8 border border-white/5 bg-[#0f172a] rounded-3xl shadow-lg">
                                <div class="text-gray-300 leading-relaxed text-[15px]">Meu pai perdeu tudo na bolsa em 2008. Aprendi que imóvel é patrimônio real. Construí R$ 2,8 milhões em 6 anos investindo R$ 3.800/mês.</div>
                                <div class="flex items-center gap-4 mt-6">
                                    <img src="https://i.pravatar.cc/150?img=12" alt="Avatar" class="w-12 h-12 rounded-full object-cover shadow-sm" />
                                    <div class="flex flex-col"><div class="font-semibold text-white text-[15px]">Gustavo Pereira</div><div class="text-sm text-gray-400">Contador • 43 anos</div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Col 2 -->
                    <div class="hidden md:flex flex-col gap-6 pb-6 w-full max-w-sm marquee-col" style="--duration: 19s;">
                        <div class="flex flex-col gap-6 marquee-inner">
                            <div class="p-8 border border-white/5 bg-[#0f172a] rounded-3xl shadow-lg">
                                <div class="text-gray-300 leading-relaxed text-[15px]">Investia R$ 3.200/mês. Em 5 anos, construí um portfólio de 6 imóveis gerando R$ 15.400 de aluguel mensal. Hoje trabalho porque quero, não porque preciso.</div>
                                <div class="flex items-center gap-4 mt-6">
                                    <img src="https://i.pravatar.cc/150?img=13" alt="Avatar" class="w-12 h-12 rounded-full object-cover shadow-sm" />
                                    <div class="flex flex-col"><div class="font-semibold text-white text-[15px]">Ricardo Santos</div><div class="text-sm text-gray-400">Ex-gerente de banco • 42 anos</div></div>
                                </div>
                            </div>
                            <div class="p-8 border border-white/5 bg-[#0f172a] rounded-3xl shadow-lg">
                                <div class="text-gray-300 leading-relaxed text-[15px]">Investi por 5 anos o que gastava em viagens e carro novo. Hoje tenho 7 imóveis gerando R$ 21 mil/mês. Valeu cada centavo economizado.</div>
                                <div class="flex items-center gap-4 mt-6">
                                    <img src="https://i.pravatar.cc/150?img=14" alt="Avatar" class="w-12 h-12 rounded-full object-cover shadow-sm" />
                                    <div class="flex flex-col"><div class="font-semibold text-white text-[15px]">Carlos Mendes</div><div class="text-sm text-gray-400">Engenheiro civil • 51 anos</div></div>
                                </div>
                            </div>
                            <div class="p-8 border border-white/5 bg-[#0f172a] rounded-3xl shadow-lg">
                                <div class="text-gray-300 leading-relaxed text-[15px]">Comprei o primeiro imóvel com a estratégia de alavancagem em 6 meses. O aluguel paga a operação e ainda sobra R$ 800. Já estou no segundo imóvel!</div>
                                <div class="flex items-center gap-4 mt-6">
                                    <img src="https://i.pravatar.cc/150?img=15" alt="Avatar" class="w-12 h-12 rounded-full object-cover shadow-sm" />
                                    <div class="flex flex-col"><div class="font-semibold text-white text-[15px]">Paulo Lima</div><div class="text-sm text-gray-400">Arquiteto • 35 anos</div></div>
                                </div>
                            </div>
                            <!-- Duplicata para Loop -->
                            <div class="p-8 border border-white/5 bg-[#0f172a] rounded-3xl shadow-lg">
                                <div class="text-gray-300 leading-relaxed text-[15px]">Investia R$ 3.200/mês. Em 5 anos, construí um portfólio de 6 imóveis gerando R$ 15.400 de aluguel mensal. Hoje trabalho porque quero, não porque preciso.</div>
                                <div class="flex items-center gap-4 mt-6">
                                    <img src="https://i.pravatar.cc/150?img=13" alt="Avatar" class="w-12 h-12 rounded-full object-cover shadow-sm" />
                                    <div class="flex flex-col"><div class="font-semibold text-white text-[15px]">Ricardo Santos</div><div class="text-sm text-gray-400">Ex-gerente de banco • 42 anos</div></div>
                                </div>
                            </div>
                            <div class="p-8 border border-white/5 bg-[#0f172a] rounded-3xl shadow-lg">
                                <div class="text-gray-300 leading-relaxed text-[15px]">Investi por 5 anos o que gastava em viagens e carro novo. Hoje tenho 7 imóveis gerando R$ 21 mil/mês. Valeu cada centavo economizado.</div>
                                <div class="flex items-center gap-4 mt-6">
                                    <img src="https://i.pravatar.cc/150?img=14" alt="Avatar" class="w-12 h-12 rounded-full object-cover shadow-sm" />
                                    <div class="flex flex-col"><div class="font-semibold text-white text-[15px]">Carlos Mendes</div><div class="text-sm text-gray-400">Engenheiro civil • 51 anos</div></div>
                                </div>
                            </div>
                            <div class="p-8 border border-white/5 bg-[#0f172a] rounded-3xl shadow-lg">
                                <div class="text-gray-300 leading-relaxed text-[15px]">Comprei o primeiro imóvel com a estratégia de alavancagem em 6 meses. O aluguel paga a operação e ainda sobra R$ 800. Já estou no segundo imóvel!</div>
                                <div class="flex items-center gap-4 mt-6">
                                    <img src="https://i.pravatar.cc/150?img=15" alt="Avatar" class="w-12 h-12 rounded-full object-cover shadow-sm" />
                                    <div class="flex flex-col"><div class="font-semibold text-white text-[15px]">Paulo Lima</div><div class="text-sm text-gray-400">Arquiteto • 35 anos</div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-20 bg-gray-800 text-white">
            <div class="container mx-auto px-4 max-w-4xl">
                <div class="text-center mb-12">
                    <span class="text-gold font-semibold uppercase tracking-wider text-sm mb-2 block">Dúvidas?</span>
                    <h2 class="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
                </div>
                
                <div class="space-y-4">
                    <div class="bg-gray-900 border border-white/10 rounded-lg overflow-hidden">
                        <button class="w-full px-6 py-4 text-left font-semibold flex justify-between items-center hover:text-gold transition-colors faq-btn">
                            O que é um despachante documental?
                            <i class="fa-solid fa-chevron-down transition-transform duration-300"></i>
                        </button>
                        <div class="px-6 py-0 max-h-0 overflow-hidden transition-all duration-300 bg-gray-900/50 faq-content">
                            <p class="text-gray-300 pb-4">É o profissional legalmente habilitado para representar pessoas físicas e jurídicas perante órgãos públicos, como Detran e Cartórios, resolvendo toda a burocracia de documentos veiculares e imobiliários.</p>
                        </div>
                    </div>
                    
                    <div class="bg-gray-900 border border-white/10 rounded-lg overflow-hidden">
                        <button class="w-full px-6 py-4 text-left font-semibold flex justify-between items-center hover:text-gold transition-colors faq-btn">
                            Por que contratar um despachante?
                            <i class="fa-solid fa-chevron-down transition-transform duration-300"></i>
                        </button>
                        <div class="px-6 py-0 max-h-0 overflow-hidden transition-all duration-300 bg-gray-900/50 faq-content">
                            <p class="text-gray-300 pb-4">Para economizar tempo, evitar erros na documentação que podem gerar multas ou atrasos, e garantir que todo o processo seja feito com segurança jurídica e eficiência.</p>
                        </div>
                    </div>
                    
                    <div class="bg-gray-900 border border-white/10 rounded-lg overflow-hidden">
                        <button class="w-full px-6 py-4 text-left font-semibold flex justify-between items-center hover:text-gold transition-colors faq-btn">
                            Vocês atendem online?
                            <i class="fa-solid fa-chevron-down transition-transform duration-300"></i>
                        </button>
                        <div class="px-6 py-0 max-h-0 overflow-hidden transition-all duration-300 bg-gray-900/50 faq-content">
                            <p class="text-gray-300 pb-4">Sim! Atendemos 100% online, facilitando a vida de quem não tem tempo a perder. Inclusive, temos forte atuação com brasileiros que moram no exterior e precisam de representação no DF.</p>
                        </div>
                    </div>
                    
                    <div class="bg-gray-900 border border-white/10 rounded-lg overflow-hidden">
                        <button class="w-full px-6 py-4 text-left font-semibold flex justify-between items-center hover:text-gold transition-colors faq-btn">
                            Como sei que o despachante é confiável?
                            <i class="fa-solid fa-chevron-down transition-transform duration-300"></i>
                        </button>
                        <div class="px-6 py-0 max-h-0 overflow-hidden transition-all duration-300 bg-gray-900/50 faq-content">
                            <p class="text-gray-300 pb-4">Verifique as credenciais. Nós somos devidamente credenciados no CRDD-DF (Conselho Regional dos Despachantes Documentalistas) e no Detran-DF, operando estritamente dentro da lei.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CONTACT -->
        <section id="contato" class="py-20 bg-gray-900">
            <div class="container mx-auto px-4 text-white">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
                    
                    <div>
                        <h2 class="text-3xl md:text-4xl font-bold mb-4">Pronto para Regularizar <br>Sua Vida?</h2>
                        <p class="text-lg text-gray-300 mb-8">Entre em contato hoje mesmo e receba um orçamento sem compromisso. Nossa equipe está pronta para te atender.</p>
                        
                        <div class="space-y-6">
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-white/10 rounded-xl flex justify-center items-center text-gold text-2xl flex-shrink-0">
                                    <i class="fa-brands fa-whatsapp"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-gray-100 mb-1">WhatsApp</h4>
                                    <a href="https://wa.me/5561986250267" class="text-gold hover:underline text-sm">+55 (61) 98625-0267</a>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-white/10 rounded-xl flex justify-center items-center text-gold text-2xl flex-shrink-0">
                                    <i class="fa-regular fa-envelope"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-gray-100 mb-1">E-mail</h4>
                                    <a href="mailto:contato@autoridadedespachante.com.br" class="text-gold hover:underline text-sm">contato@autoridadedespachante.com.br</a>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-white/10 rounded-xl flex justify-center items-center text-gold text-2xl flex-shrink-0">
                                    <i class="fa-solid fa-location-dot"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-gray-100 mb-1">Atendimento</h4>
                                    <p class="text-gray-300 text-sm">Brasília - DF e 100% Online</p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-8 flex gap-4">
                            <a href="https://instagram.com/autoridadedespachante" target="_blank" class="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Form -->
                    <div class="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl shadow-xl p-8">
                        <div class="mb-6">
                            <h3 class="text-xl font-bold text-white mb-2">Envie uma Mensagem</h3>
                        </div>
                        <form id="contact-form" class="space-y-6" onsubmit="event.preventDefault(); alert('Formulário enviado com sucesso!');">
                            <div>
                                <label class="block text-xs font-medium text-gray-300 mb-2">Nome Completo *</label>
                                <input type="text" required class="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-gold bg-black/30 text-white placeholder-gray-500" placeholder="Seu nome">
                            </div>
                            <div>
                                <label class="block text-xs font-medium text-gray-300 mb-2">E-mail *</label>
                                <input type="email" required class="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-gold bg-black/30 text-white placeholder-gray-500" placeholder="seu@email.com">
                            </div>
                            <div>
                                <label class="block text-xs font-medium text-gray-300 mb-2">Telefone / WhatsApp *</label>
                                <input type="tel" required class="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-gold bg-black/30 text-white placeholder-gray-500" placeholder="(61) 90000-0000">
                            </div>
                            <div>
                                <label class="block text-xs font-medium text-gray-300 mb-2">Mensagem *</label>
                                <textarea required rows="4" class="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-gold bg-black/30 text-white placeholder-gray-500" placeholder="Como podemos ajudar?"></textarea>
                            </div>
                            <button type="submit" class="w-full bg-gold text-white font-bold py-4 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-[1.02] shadow-lg">
                                Solicitar Orçamento
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <!-- FOOTER -->
        <footer class="bg-black text-gray-400 py-12 border-t border-white/10">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div class="col-span-1 md:col-span-2">
                        <h2 style="font-family: 'Outfit'; color: var(--gold); margin-bottom: 1rem; font-size: 1.5rem; font-weight: bold; line-height: 1.2;">AUTORIDADE<br><span style="font-size: 1rem; color: #fff;">DESPACHANTE</span></h2>
                        <p class="text-sm max-w-sm">Sua Solução Completa para Documentação Veicular e Imobiliária em Brasília/DF.</p>
                    </div>
                    <div>
                        <h4 class="text-white font-bold mb-4">Navegação</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="#" onclick="scrollToSection('inicio')" class="hover:text-gold transition-colors">Início</a></li>
                            <li><a href="#" onclick="scrollToSection('sobre')" class="hover:text-gold transition-colors">Sobre Nós</a></li>
                            <li><a href="#" onclick="scrollToSection('servicos')" class="hover:text-gold transition-colors">Serviços</a></li>
                            <li><a href="#" onclick="scrollToSection('faq')" class="hover:text-gold transition-colors">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-white font-bold mb-4">Serviços</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="#" onclick="scrollToSection('servicos')" class="hover:text-gold transition-colors">Licenciamento</a></li>
                            <li><a href="#" onclick="scrollToSection('servicos')" class="hover:text-gold transition-colors">Transferência de Veículo</a></li>
                            <li><a href="#" onclick="scrollToSection('servicos')" class="hover:text-gold transition-colors">Regularização de Imóveis</a></li>
                            <li><a href="#" onclick="scrollToSection('servicos')" class="hover:text-gold transition-colors">Escritura e Registro</a></li>
                        </ul>
                    </div>
                </div>
                <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>&copy; 2026 Autoridade Despachante. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>

        <!-- WhatsApp Floating Button -->
        <a href="https://wa.me/5561986250267" target="_blank" class="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition-transform z-50">
            <i class="fa-brands fa-whatsapp"></i>
        </a>
    </div>
</body>
</html>
`

fs.writeFileSync('/Users/andrei.lepsch/apps/Autoridade Despachante/index.html', html);
