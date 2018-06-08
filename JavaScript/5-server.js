'use strict';

const http = require('http');

const users = {
  marcus: { name: 'Marcus Aurelius', city: 'Rome', born: 121 },
  mao: { name: 'Mao Zedong', city: 'Shaoshan', born: 1893 },
};

const routing = {
  '/api/user/': name => users[name],
  '/api/userBorn/': name => users[name].born
};

const types = {
  object: o => JSON.stringify(o),
  undefined: () => '{"error":"not found"}',
  function: (fn, req, res) => JSON.stringify(fn(req, res))
};

http.createServer((req, res) => {
  const data = routing[req.url];
  const type = typeof(data);
  const serializer = types[type];
  const result = serializer(data, req, res);
  res.end(result);
}).listen(8000);
