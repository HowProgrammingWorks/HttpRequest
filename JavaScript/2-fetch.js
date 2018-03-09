'use strict';

const http = require('http');

const fetch = url => new Promise((resolve, reject) => http.get(url, res => {
  if (res.statusCode !== 200) {
    reject(`Status Code: ${res.statusCode}`);
    return;
  }
  res.setEncoding('utf8');
  const lines = [];
  res.on('data', chunk => lines.push(chunk));
  res.on('end', () => resolve(lines.join()));
}));

// Usage

fetch('http://ietf.org/')
  .then(body => console.log(body))
  .catch(err => console.error(err));
