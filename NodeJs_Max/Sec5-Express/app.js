const http = require('http');

const express = require('express');

const app = express();

// Middleware is what express is all about
// Allows us to run functions via requst , and send a response
// Allows us to add in Third party functionality
app.use((req, res, next) => {});

const server = http.createServer(app);

server.listen(3000);
