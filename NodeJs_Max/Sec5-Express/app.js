const http = require('http');

const express = require('express');

const app = express();

// Middleware is what express is all about
// Allows us to run functions via requst , and send a response
// Allows us to add in Third party functionality
// next allows us to continue one to the next middleware after the req,res
app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // To the next middleware
});


app.use((req, res, next) => {
    console.log('Another middleware!');
    res.send(`<h1> Hello from Express!</h1>`) // sending
});

const server = http.createServer(app);

server.listen(3000);
