const fs = require('fs');
let html = fs.readFileSync('/Users/andrei.lepsch/apps/Autoridade Despachante/index.html', 'utf8');

const oldFooter = html.substring(
    html.indexOf('<!-- FOOTER -->'),
    html.indexOf('<!-- WhatsApp Floating Button -->')
);

const newFooter = `<!-- FOOTER -->
        <footer class="bg-gray-900 text-white py-12">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div class="text-center md:text-left">
                        <img src="assets/images/logo-horiz-negative.svg" alt="Autoridade Despachante" class="h-16 md:h-12 mb-4 mx-auto md:mx-0">
                        <p class="text-gray-400 text-base md:text-sm">Sua Solução Completa para Documentação Veicular e Imobiliária em Brasília/DF.</p>
                    </div>
                    <div class="text-center md:text-left">
                        <h4 class="font-semibold mb-4 text-lg md:text-base">Links Rápidos</h4>
                        <ul class="space-y-2 text-base md:text-sm">
                            <li><button onclick="scrollToSection('inicio')" class="text-gray-400 hover:text-gold transition-colors">Início</button></li>
                            <li><button onclick="scrollToSection('sobre')" class="text-gray-400 hover:text-gold transition-colors">Sobre Nós</button></li>
                            <li><button onclick="scrollToSection('servicos')" class="text-gray-400 hover:text-gold transition-colors">Serviços</button></li>
                            <li><button onclick="scrollToSection('como-funciona')" class="text-gray-400 hover:text-gold transition-colors">Como Funciona</button></li>
                            <li><button onclick="scrollToSection('faq')" class="text-gray-400 hover:text-gold transition-colors">FAQ</button></li>
                            <li><button onclick="scrollToSection('contato')" class="text-gray-400 hover:text-gold transition-colors">Contato</button></li>
                        </ul>
                    </div>
                    <div class="text-center md:text-left">
                        <h4 class="font-semibold mb-4 text-lg md:text-base">Redes Sociais</h4>
                        <div class="flex space-x-4 justify-center md:justify-start">
                            <a href="#" class="text-gray-400 hover:text-gold transition-colors" aria-label="Facebook">
                                <i class="fa-brands fa-facebook text-2xl"></i>
                            </a>
                            <a href="https://instagram.com/autoridadedespachante" class="text-gray-400 hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i class="fa-brands fa-instagram text-2xl"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-gold transition-colors" aria-label="LinkedIn">
                                <i class="fa-brands fa-linkedin text-2xl"></i>
                            </a>
                        </div>
                    </div>
                    <div class="text-center md:text-left">
                        <h4 class="font-semibold mb-4 text-lg md:text-base">Contato</h4>
                        <ul class="space-y-4 text-base md:text-sm">
                            <li>
                                <a href="https://wa.me/5561986250267" target="_blank" class="flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-gold transition-colors">
                                    <i class="fa-brands fa-whatsapp text-xl"></i>
                                    (61) 98625-0267
                                </a>
                            </li>
                            <li class="flex items-start justify-center md:justify-start gap-2 text-gray-400">
                                <span class="text-sm">Brasília - DF e 100% Online</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="border-t border-gray-800 pt-8">
                    <p class="text-gray-400 text-base md:text-sm text-center">© 2026 Autoridade Despachante. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>

        `;

html = html.replace(oldFooter, newFooter);
fs.writeFileSync('/Users/andrei.lepsch/apps/Autoridade Despachante/index.html', html);
