const fs = require('fs');
const imageBuffer = fs.readFileSync('public/images/miojo.jpg');
const base64Image = imageBuffer.toString('base64');

console.log(base64Image);