const fs = require('fs');
const s = fs.readFileSync('index.html', 'utf8');

const firstComp = s.indexOf('alt="Company"');
console.log('First alt="Company" at:', firstComp);
console.log(s.substring(firstComp - 600, firstComp + 200));
