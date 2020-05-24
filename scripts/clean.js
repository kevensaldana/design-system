const fs = require('fs-extra');
const path = require('path');

const dirs = [
  'dist',
  'docs'
];

dirs.forEach(dir => {
  const cleanDir = path.join(__dirname, '../', dir);
  fs.removeSync(cleanDir);
});
