const fs = require('fs');
const path = require('node:path');
const normalizePath = path.join(__dirname, 'text.txt');
const { stdout } = process;

stdout.write('"'+normalizePath+'" it\'s contains ==>\n');
const Readstream = fs.createReadStream(normalizePath, 'utf-8');

let data = '';

Readstream.on('data', (chunk) => (data += chunk));
Readstream.on('end', () => stdout.write(data));