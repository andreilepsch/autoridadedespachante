const fs = require('fs');
let html = fs.readFileSync('/Users/andrei.lepsch/apps/Autoridade Despachante/index.html', 'utf8');

const oldFooter = html.substring(
    html.indexOf('<!-- FOOTER -->'),
    html.indexOf('<!-- WhatsApp Floating Button -->')
);

const newFooter = `<!-- FOOTER -->
        <footer class="bg-[#0b1120] text-gray-400 py-16 font-sans">
            <div class="container mx-auto px-4 max-w-6xl">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
                    
                    <!-- Coluna 1: Logo e Descrição -->
                    <div class="text-left">
                        <img src="assets/images/logo-horiz-negative.svg" alt="Autoridade Despachante" class="h-12 mb-6">
                        <p class="text-sm leading-relaxed max-w-[280px]">Sua Solução Completa para Documentação Veicular e Imobiliária em Brasília/DF.</p>
                    </div>
                    
                    <!-- Coluna 2: Links Rápidos -->
                    <div class="text-left">
                        <h4 class="font-bold text-white mb-6 text-base tracking-wide">Links Rápidos</h4>
                        <ul class="space-y-4 text-sm font-medium">
                            <li><button onclick="scrollToSection('inicio')" class="hover:text-white transition-colors">Início</button></li>
                            <li><button onclick="scrollToSection('sobre')" class="hover:text-white transition-colors">Sobre Nós</button></li>
                            <li><button onclick="scrollToSection('servicos')" class="hover:text-white transition-colors">Serviços</button></li>
                            <li><button onclick="scrollToSection('como-funciona')" class="hover:text-white transition-colors">Como Funciona</button></li>
                            <li><button onclick="scrollToSection('faq')" class="hover:text-white transition-colors">FAQ</button></li>
                            <li><button onclick="scrollToSection('contato')" class="hover:text-white transition-colors">Contato</button></li>
                        </ul>
                    </div>
                    
                    <!-- Coluna 3: Redes Sociais -->
                    <div class="text-left">
                        <h4 class="font-bold text-white mb-6 text-base tracking-wide">Redes Sociais</h4>
                        <div class="flex items-center space-x-4">
                            <a href="#" class="text-gray-400 hover:text-white transition-colors text-2xl" aria-label="Facebook">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://instagram.com/autoridadedespachante" target="_blank" class="text-gray-400 hover:text-white transition-colors text-2xl" aria-label="Instagram">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors text-2xl" aria-label="LinkedIn">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Coluna 4: Contato -->
                    <div class="text-left">
                        <h4 class="font-bold text-white mb-6 text-base tracking-wide">Contato</h4>
                        <ul class="space-y-5 text-sm">
                            <li>
                                <a href="https://wa.me/5561986250267" target="_blank" class="flex items-center gap-3 hover:text-white transition-colors">
                                    <i class="fa-brands fa-whatsapp text-lg"></i>
                                    (61) 98625-0267
                                </a>
                            </li>
                            <li class="leading-relaxed">
                                Brasília - DF e 100% Online
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="pt-8 border-t border-gray-800 text-center">
                    <p class="text-sm">© 2026 Autoridade Despachante. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>

        `;

html = html.replace(oldFooter, newFooter);
fs.writeFileSync('/Users/andrei.lepsch/apps/Autoridade Despachante/index.html', html);
