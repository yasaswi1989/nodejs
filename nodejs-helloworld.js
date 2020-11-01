#!/usr/bin/env nodejs
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8080, 'localhost');
var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'scripts/external_javascript.js';
    document.body.appendChild(script);
console.log('Server running at http://localhost:8080/');
