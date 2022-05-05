const fs = require('fs');
const text = fs.readFileSync('./text.txt', 'utf-8');
console.log(text);
