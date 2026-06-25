const fs = require('fs');
let html = fs.readFileSync('/Users/andrei.lepsch/apps/Autoridade Despachante/index.html', 'utf8');

const oldNavStart = html.indexOf('<nav class="container mx-auto px-4 py-3">');
const oldNavEnd = html.indexOf('</nav>') + 6;
const oldNav = html.substring(oldNavStart, oldNavEnd);

let newNav = oldNav
    // Desktop Nav
    .replace(/font-medium text-white/g, 'font-semibold text-white tracking-wide')
    // Mobile Nav
    .replace(/text-left transition-colors py-2 text-white/g, 'text-left transition-colors py-2 text-white font-semibold tracking-wide');

html = html.replace(oldNav, newNav);
fs.writeFileSync('/Users/andrei.lepsch/apps/Autoridade Despachante/index.html', html);
