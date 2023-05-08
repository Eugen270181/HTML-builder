const fs = require('node:fs/promises');
const path = require('node:path');

async function copyDir() {
 await fs.rm(path.join(__dirname, 'files-copy'), { recursive: true, force: true } );
 await fs.mkdir(path.join(__dirname, 'files-copy'));
 
 const files = await fs.readdir(path.join(__dirname, 'files'));
 
 for ( let file of files) {
  await fs.copyFile( path.join(__dirname, 'files', file), path.join(__dirname, 'files-copy',file));
 }
}

copyDir();
