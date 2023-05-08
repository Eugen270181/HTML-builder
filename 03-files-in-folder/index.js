const fs = require('fs');
const path = require('node:path');

fs.readdir (
  path.join (__dirname, 'secret-folder'),
  { withFileTypes: true },
  (err, files) => {
    if (err) throw err;
    for (let file of files) {
      fs.stat(
        path.join(__dirname, 'secret-folder', file.name),
        (err, stats) => {
          if (!stats.isDirectory()) {
            console.log(path.parse(file.name).name + " - " + path.parse(file.name).ext + " - " + stats.size + " bytes");
          }
        }
      );
    }
  }
);