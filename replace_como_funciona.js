const fs = require('fs');
let html = fs.readFileSync('/Users/andrei.lepsch/apps/Autoridade Despachante/index.html', 'utf8');

const startTag = '<section id="como-funciona" class="py-20 bg-gray-800 text-white">';
const endTag = '<!-- TESTIMONIALS -->';

const sectionStart = html.indexOf(startTag);
const sectionEnd = html.indexOf(endTag);
const oldSection = html.substring(sectionStart, sectionEnd);

const newSection = `<section id="como-funciona" class="py-24 bg-gray-50">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <span class="text-[#D4AB41] font-semibold uppercase tracking-wider text-sm mb-2 block">Processo Simplificado</span>
                    <h2 class="text-[2.5rem] md:text-4xl font-bold text-[#111827] mb-4">Como Contratar Nossos Serviços?</h2>
                    <p class="text-lg text-[#4b5563] max-w-2xl mx-auto">Resolvemos sua documentação em 5 passos simples, sem dor de cabeça.</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 max-w-6xl mx-auto">
                    <!-- Row 1: 3 items on desktop -->
                    <article class="col-span-1 md:col-span-1 lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col items-center text-center">
                        <div class="w-14 h-14 bg-[#D4AB41]/10 rounded-full flex items-center justify-center mb-6">
                            <span class="text-[#D4AB41] text-2xl font-bold">1</span>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-[#111827] mb-3">Contato Inicial</h3>
                            <p class="text-[#4b5563] leading-relaxed text-sm">Fale conosco pelo WhatsApp, formulário ou telefone, explicando sua necessidade.</p>
                        </div>
                    </article>
                    
                    <article class="col-span-1 md:col-span-1 lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col items-center text-center">
                        <div class="w-14 h-14 bg-[#D4AB41]/10 rounded-full flex items-center justify-center mb-6">
                            <span class="text-[#D4AB41] text-2xl font-bold">2</span>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-[#111827] mb-3">Análise e Orçamento</h3>
                            <p class="text-[#4b5563] leading-relaxed text-sm">Analisamos seu caso e enviamos um orçamento detalhado e transparente.</p>
                        </div>
                    </article>
                    
                    <article class="col-span-1 md:col-span-1 lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col items-center text-center md:col-span-2 lg:col-span-2">
                        <div class="w-14 h-14 bg-[#D4AB41]/10 rounded-full flex items-center justify-center mb-6">
                            <span class="text-[#D4AB41] text-2xl font-bold">3</span>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-[#111827] mb-3">Envio de Documentos</h3>
                            <p class="text-[#4b5563] leading-relaxed text-sm">Orientações claras para o envio da documentação de forma totalmente segura.</p>
                        </div>
                    </article>
                    
                    <!-- Row 2: 2 items on desktop -->
                    <article class="col-span-1 md:col-span-1 lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col items-center text-center lg:px-12">
                        <div class="w-14 h-14 bg-[#D4AB41]/10 rounded-full flex items-center justify-center mb-6">
                            <span class="text-[#D4AB41] text-2xl font-bold">4</span>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-[#111827] mb-3">Acompanhamento</h3>
                            <p class="text-[#4b5563] leading-relaxed text-sm">Você será informado ativamente sobre o andamento de todo o processo.</p>
                        </div>
                    </article>
                    
                    <article class="col-span-1 md:col-span-1 lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col items-center text-center lg:px-12">
                        <div class="w-14 h-14 bg-[#D4AB41]/10 rounded-full flex items-center justify-center mb-6">
                            <span class="text-[#D4AB41] text-2xl font-bold">5</span>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-[#111827] mb-3">Entrega Final</h3>
                            <p class="text-[#4b5563] leading-relaxed text-sm">Receba seus documentos finalizados e regularizados com total conforto.</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        `;

html = html.replace(oldSection, newSection);
fs.writeFileSync('/Users/andrei.lepsch/apps/Autoridade Despachante/index.html', html);
