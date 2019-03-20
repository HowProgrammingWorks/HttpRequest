'use strict';

const http = require('http');
const https = require('https');

const fetch = url => new Promise((resolve, reject) => {
  const protocol = url.startsWith('https') ? https : http;
  protocol.get(url, res => {
    if (res.statusCode !== 200) {
      const { statusCode, statusMessage } = res;
      reject(new Error(`Status Code: ${statusCode} ${statusMessage}`));
    }
    res.setEncoding('utf8');
    const lines = [];
    res.on('data', chunk => lines.push(chunk));
    res.on('end', () => resolve(lines.join()));
  });
});

// Usage

fetch('http://ietf.org/')
  .then(body => console.log(body))
  .catch(err => console.error(err));
