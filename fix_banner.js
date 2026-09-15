const fs = require('fs');
let content = fs.readFileSync('C:/Users/Addiztech/Desktop/farhan/index.html', 'utf8');

// Ensure banner text doesn't wrap and scales down
content = content.replace(/<h2>FARHAN HASSAN<\/h2>/, '<h2 style="white-space: nowrap; font-size: clamp(40px, 10vw, 150px);">FARHAN HASSAN</h2>');

fs.writeFileSync('C:/Users/Addiztech/Desktop/farhan/index.html', content);
console.log('Update complete!');
