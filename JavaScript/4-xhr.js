'use strict';

const fs = require('node:fs');
const http = require('node:http');

const index = fs.readFileSync('./4-xhr.html');

http.createServer((req, res) => {
  if (req.url === '/person') {
    res.end(JSON.stringify({ name: 'Marcus' }));
  } else {
    res.end(index);
  }
}).listen(8000);
