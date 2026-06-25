const fs = require('fs');
let html = fs.readFileSync('/Users/andrei.lepsch/apps/Autoridade Despachante/index.html', 'utf8');

const oldContactStart = html.indexOf('<!-- CONTACT -->');
const oldContactEnd = html.indexOf('<!-- FOOTER -->');
const oldContact = html.substring(oldContactStart, oldContactEnd);

const newContact = `<!-- CONTACT -->
        <section id="contato" class="py-24 bg-white">
            <div class="container mx-auto px-4">
                
                <div class="text-center mb-16">
                    <h2 class="text-[2.5rem] font-bold text-[#111827] mb-4">Agende Sua Consultoria Gratuita</h2>
                    <p class="text-[1.125rem] text-[#4b5563] max-w-2xl mx-auto leading-relaxed">Em 30 minutos, você vai descobrir exatamente quanto pode construir em patrimônio e renda passiva nos próximos 5 anos</p>
                    <div class="mt-8 flex flex-wrap justify-center gap-6">
                        <div class="flex items-center gap-2 text-[0.875rem] font-medium text-[#4b5563]">
                            <svg class="w-[18px] h-[18px] text-[#D4AB41]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                            100% Gratuito
                        </div>
                        <div class="flex items-center gap-2 text-[0.875rem] font-medium text-[#4b5563]">
                            <svg class="w-[18px] h-[18px] text-[#D4AB41]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                            Sem Compromisso
                        </div>
                        <div class="flex items-center gap-2 text-[0.875rem] font-medium text-[#4b5563]">
                            <svg class="w-[18px] h-[18px] text-[#D4AB41]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                            Resposta em 24h
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
                    
                    <!-- Form -->
                    <div class="bg-[#f9fafb] rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 border border-gray-100">
                        <div class="mb-8">
                            <h3 class="text-[1.375rem] font-bold text-[#111827] mb-2">Preencha o formulário abaixo</h3>
                            <p class="text-[0.875rem] text-[#6b7280]">Nossa equipe entrará em contato em até 24h úteis para agendar sua consultoria</p>
                        </div>
                        <form id="contact-form" class="space-y-5" onsubmit="event.preventDefault(); alert('Formulário enviado com sucesso!');">
                            <div>
                                <label class="block text-[0.75rem] font-medium text-[#4b5563] mb-2">Nome Completo *</label>
                                <input type="text" required class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D4AB41] outline-none bg-white text-[#111827]" placeholder="Como podemos te chamar?">
                            </div>
                            <div>
                                <label class="block text-[0.75rem] font-medium text-[#4b5563] mb-2">E-mail *</label>
                                <input type="email" required class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D4AB41] outline-none bg-white text-[#111827]" placeholder="seu.email@exemplo.com">
                            </div>
                            <div>
                                <label class="block text-[0.75rem] font-medium text-[#4b5563] mb-2">WhatsApp *</label>
                                <input type="tel" required class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D4AB41] outline-none bg-white text-[#111827]" placeholder="(00) 00000-0000">
                            </div>
                            <div>
                                <label class="block text-[0.75rem] font-medium text-[#4b5563] mb-2">Capacidade de investimento *</label>
                                <select required class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D4AB41] outline-none bg-white text-[#111827] appearance-none">
                                    <option value="" disabled selected>Escolha sua preferência</option>
                                    <option value="1">Até R$ 100 mil</option>
                                    <option value="2">R$ 100 mil a R$ 300 mil</option>
                                    <option value="3">R$ 300 mil a R$ 1 milhão</option>
                                    <option value="4">Acima de R$ 1 milhão</option>
                                </select>
                            </div>
                            <div class="pt-2">
                                <button type="submit" class="w-full bg-[#D4AB41] text-white px-6 py-[1.125rem] rounded-lg font-bold hover:bg-opacity-90 transition-all text-[0.9375rem] shadow-[0_4px_14px_rgba(212,171,65,0.4)]">
                                    Solicitar Consultoria Gratuita →
                                </button>
                            </div>
                            <p class="text-[0.6875rem] text-[#9ca3af] text-center px-4 leading-relaxed mt-4">Ao enviar, você concorda em receber comunicações sobre investimentos imobiliários</p>
                        </form>
                    </div>

                    <!-- Contact Info -->
                    <div class="space-y-6 self-start w-full">
                        
                        <!-- Alert Box -->
                        <div class="bg-[#fefce8] border border-[#fef08a] rounded-[0.75rem] p-6 text-center shadow-sm">
                            <p class="text-[0.875rem] text-[#374151] leading-relaxed">
                                <span class="font-bold inline-flex items-center gap-1">⏰ Atenção:</span> Devido à alta procura, estamos atendendo apenas <br>
                                <span class="font-bold text-[#D4AB41]">15 novas consultorias por semana</span>.<br>
                                Garanta sua vaga agora!
                            </p>
                        </div>
                        
                        <!-- Features Box -->
                        <div class="bg-[#161e2e] rounded-[1.25rem] shadow-xl p-8 text-white h-auto">
                            <h3 class="text-[1.25rem] font-bold mb-8">O que você vai descobrir na consultoria:</h3>
                            <div class="space-y-6">
                                <div class="flex items-start gap-4">
                                    <svg class="w-6 h-6 text-[#D4AB41] flex-shrink-0 mt-[2px]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                                    <div>
                                        <p class="font-bold text-[0.875rem]">Seu potencial exato de patrimônio</p>
                                        <p class="text-[0.75rem] text-[#9ca3af] mt-1">Cálculo personalizado baseado na sua renda atual</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-4">
                                    <svg class="w-6 h-6 text-[#D4AB41] flex-shrink-0 mt-[2px]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                                    <div>
                                        <p class="font-bold text-[0.875rem]">Oportunidades exclusivas do momento</p>
                                        <p class="text-[0.75rem] text-[#9ca3af] mt-1">Imóveis abaixo do mercado disponíveis agora</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-4">
                                    <svg class="w-6 h-6 text-[#D4AB41] flex-shrink-0 mt-[2px]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                                    <div>
                                        <p class="font-bold text-[0.875rem]">Plano de ação personalizado</p>
                                        <p class="text-[0.75rem] text-[#9ca3af] mt-1">Passo a passo do que fazer para começar</p>
                                    </div>
                                </div>
                                <div class="flex items-start gap-4">
                                    <svg class="w-6 h-6 text-[#D4AB41] flex-shrink-0 mt-[2px]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                                    <div>
                                        <p class="font-bold text-[0.875rem]">Simulação de crédito pré-aprovada</p>
                                        <p class="text-[0.75rem] text-[#9ca3af] mt-1">Quanto você pode investir sem comprometer seu orçamento</p>
                                    </div>
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
