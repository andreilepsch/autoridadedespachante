const fs = require('fs');
let html = fs.readFileSync('/Users/andrei.lepsch/apps/Autoridade Despachante/index.html', 'utf8');

const oldFormDiv = 'bg-[#f9fafb] rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 border border-gray-100';
const newFormDiv = 'bg-gray-50 rounded-2xl shadow-xl p-8 border-2 border-gray-100';

const oldBtn = 'w-full bg-[#D4AB41] text-white px-6 py-[1.125rem] rounded-lg font-bold hover:bg-opacity-90 transition-all text-[0.9375rem] shadow-[0_4px_14px_rgba(212,171,65,0.4)]';
const newBtn = 'w-full bg-[#D4AB41] text-white px-6 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all text-sm shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-center';

if(html.includes(oldFormDiv) && html.includes(oldBtn)) {
    html = html.replace(oldFormDiv, newFormDiv).replace(oldBtn, newBtn);
    fs.writeFileSync('/Users/andrei.lepsch/apps/Autoridade Despachante/index.html', html);
    console.log("Replaced successfully!");
} else {
    console.log("Could not find the target classes!");
}
