// Please create a simple "Hello World" API. Meaning:

// 1. It should be a RESTful JSON API that listens on a port of your choice.

// 2. When someone sends an HTTP request to the route /hello, you should return a welcome message, in JSON format. 
// This message can be anything you want. 

var http = require('http'); // node http library
var url = require('url') // node url library
var StringDecoder = require('string_decoder').StringDecoder; // node decoder liprary for parcing requests

var httpServer = http.createServer(function(req,res){
    // get the url and parse it
    let parsedUrl = url.parse(req.url,true); // new for every req


    // get the path 
    var path = parsedUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g,'');

    // get the query string as an object
    var queryStringObject = parsedUrl.query;

    // Get the http method
    var method = req.method.toLowerCase();

    // Get the headers at an object
    var headers = req.headers;

    // get the payload if any
    var decoder = new StringDecoder('utf-8'); // utf-8 is the type of decoding
    var buffer = '';
    req.on('data', function(data){ // will be called if theres data to recieve
        buffer +=decoder.write(data); // appending the data to buffer as it comes in
    });
    req.on('end', function(){ // end event always gets called
        buffer  += decoder.end();

        //choose the handler this request should go to, if one is not found, use the not found handler
        chosenHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound; 

        // construct the data object to send to the handler
        var data = {
            'trimmedPath': trimmedPath,
            'queryStringObject': queryStringObject,
            'method' : method,
            'headers': headers,
            'payload': buffer
        };

        // rout the request to the handler specified in the router
        chosenHandler(data,function(statusCode,payload){
            // Use the status code called back by the handler or default to 200
            statusCode = typeof(statusCode) == 'number' ? statusCode : 200;

            // use the payload called back by the handler, or default to an empty object
            payload = typeof(payload) == 'object' ? payload : {};

            // convert the payload to a string
            var payloadString = JSON.stringify(payload);

            // return the response
            res.setHeader('Content-type', 'application/json');
            res.writeHead(statusCode);
            res.end(payloadString);


            // log the requested path and method and querystringObject
            // console.log('Request recieved on path: '+trimmedPath+ 'with' +method+ 'with thease query string paramiters', queryStringObject);
            console.log('Returning this response: ',statusCode,payloadString);
        });
    });
});

httpServer.listen(3000, function(){
    console.log('the http server is listening on port 3000');
});

// Defind the handlers
var handlers = {};

// sample handler
handlers.sample = function(data,callback){
    // callback a http status code, and a payload object
    callback(406,{'greeting':'What it do?!'});
};

// not found handler
handlers.notFound = function(data, callback) {
 callback(404);
};

// define a request router
var router = {
    'hello' : handlers.sample
};