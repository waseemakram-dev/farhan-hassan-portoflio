const fs = require('fs');
const s = fs.readFileSync('index.html', 'utf8');

const idxAbout = s.indexOf('id="about"');
// Find the preceding section or div before id="about"
console.log('--- 1200 chars before id="about" ---');
console.log(s.substring(idxAbout - 1200, idxAbout + 100));
