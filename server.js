// const http = require('http');
const express = require('express');

const hostname = '127.0.0.1';
const port = 5000;

const server = express();

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", 'text/plain');
//     res.end('Hello World, from NodeJS');
// });

server.get('/', (req, res) => {
    res.send('Hello World from EXPRESS!');
})

server.listen(port, () => {
    console.log(`server listening on ${port}`);
})