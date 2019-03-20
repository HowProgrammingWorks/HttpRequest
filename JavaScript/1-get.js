'use strict';

const http = require('http');

const url = 'http://ietf.org/';

http.get(url, res => {
  console.log(res.req._header);
  console.dir(res.headers);
  if (res.statusCode !== 200) {
    const { statusCode, statusMessage } = res;
    console.log(`Status Code: ${statusCode} ${statusMessage}`);
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
