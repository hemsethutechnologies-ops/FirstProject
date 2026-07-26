const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\DELL\\.gemini\\antigravity-ide\\brain\\c445934d-5469-4cfd-9725-35e0b13ceba3';
const destDir = 'e:\\stt\\src\\assets';

const files = fs.readdirSync(srcDir);
const internFiles = files.filter(f => f.startsWith('intern_') && f.endsWith('.png'));

internFiles.forEach(file => {
  // extract base name before timestamp, e.g. intern_frontend_12345.png -> intern_frontend
  const parts = file.split('_');
  parts.pop(); // remove timestamp
  const newName = parts.join('_') + '.png';
  
  fs.copyFileSync(path.join(srcDir, file), path.join(destDir, newName));
  console.log(`Copied ${file} to ${newName}`);
});
