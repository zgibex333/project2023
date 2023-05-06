const path = require('path');
const fs = require('fs');

const nmodulesPath = path.join(__dirname, '..', 'node_modules/.cache');
fs.rm(nmodulesPath, { recursive: true, force: true }, (err) =>
    console.log(err),
);
