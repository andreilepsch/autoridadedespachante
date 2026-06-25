const fs = require('fs');
let html = fs.readFileSync('/Users/andrei.lepsch/apps/Autoridade Despachante/index.html', 'utf8');

const oldFooter = html.substring(
    html.indexOf('<!-- FOOTER -->'),
    html.indexOf('<!-- WhatsApp Floating Button -->')
);

// Reduce font sizes
let newFooter = oldFooter
    .replace(/text-base md:text-sm/g, 'text-sm md:text-xs')
    .replace(/text-lg md:text-base/g, 'text-base md:text-sm')
    .replace(/text-2xl/g, 'text-xl')
    .replace(/text-xl/g, 'text-lg')
    .replace(/<span class="text-sm">Brasília/g, '<span class="text-xs">Brasília');

html = html.replace(oldFooter, newFooter);
fs.writeFileSync('/Users/andrei.lepsch/apps/Autoridade Despachante/index.html', html);
