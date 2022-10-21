const http = require('http');

const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('In the middleware!');
    res.send('<form></form/')
});

app.use('/addProduct', (req, res, next) => {
    console.log('Another middleware!');
    res.send(`<h1> add product page </h1>`) // sending
});

app.use('/', (req, res, next) => {
    console.log('Another Other middleware!');
    res.send(`<h1> Hello from Express!</h1>`) // sending
});

const server = http.createServer(app);

server.listen(3000);
