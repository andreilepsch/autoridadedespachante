const fs = require('fs');
let html = fs.readFileSync('/Users/andrei.lepsch/apps/Autoridade Despachante/index.html', 'utf8');

const oldFooter = html.substring(
    html.indexOf('<!-- FOOTER -->'),
    html.indexOf('<!-- WhatsApp Floating Button -->')
);

// Align left everywhere
let newFooter = oldFooter
    .replace(/text-center md:text-left/g, 'text-left')
    .replace(/justify-center md:justify-start/g, 'justify-start')
    .replace(/mx-auto md:mx-0/g, '')
    .replace(/text-center/g, 'text-left'); // Also replace any generic text-center in the footer bottom

html = html.replace(oldFooter, newFooter);
fs.writeFileSync('/Users/andrei.lepsch/apps/Autoridade Despachante/index.html', html);
