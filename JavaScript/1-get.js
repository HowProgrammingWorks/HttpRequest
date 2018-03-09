'use strict';

const http = require('http');

const url = 'http://ietf.org/';

http.get(url, res => {
  if (res.statusCode !== 200) {
    console.log(`Status Code: ${res.statusCode}`);
    return;
  }
  res.setEncoding('utf8');
  const lines = [];
  res.on('data', chunk => {
    lines.push(chunk);
  });
  res.on('end', () => {
    console.log(lines.join());
  });
});
