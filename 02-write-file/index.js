const fs = require('fs');
const path = require('node:path');
const normalizePath = path.join(__dirname, 'text.txt');
const { stdin, stdout, stderr } = process;

fs.writeFile(path.join(__dirname, "text.txt"), "", (error) => { if (error) throw error; });
stdout.write('Введите текст?\n');
stdin.on('data', data => {
  if (data.includes('exit')) process.exit(); 
  fs.appendFile(path.join(__dirname, "text.txt"), data, (error) => { if (error) throw error; }); 
});
  
process.on('SIGINT', () => process.exit());
process.on('exit', () => stdout.write('Удачи!'));