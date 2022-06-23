# Jonas-Node

section 1 Welcome

section 2 Introduction to Node.js ad NPM

        22. setting up Prettier in vs code

section 3. Introduction to Back-End Web Development

        25. An overview of how the web works

            Request-response model or Client-server architecture:
                client - Sends request to server and recieves response

                Server - recieves a request from Client and responds

            The domain is not the real address, a DNS will convert it to the ip address

            TCP/IP socket connection - communication protocol defines how data travels acrost the web, it breaks up the requests and responses into little chuncks called packets before they are sent, then when they reach the destination they are reassembled as quick as possible.

            trying to send it as one big piece is like going through heavy traffic in a bus

            HTTP REQUEST - also communication protocol

                start line- HTTP method + request target + HTTP version

                HTTP request headers(many diffrent possibilities)

                Request body (only when sending data to server, e.g. POST)


            Http RESPONSE - " "

                start line: HTTP version + status code + status message

                HTTP response headers (many diffrent possibilities)

                Response Body (most responses)

        26. HTTP in Action

                open udemy, open network tab in dev tools, select disable cache, refresh udemy page, under name select udemy.com:
                    now we can see the request and response information for the page

                    can also see cookies tab as well as response tab

        27. Front-End vs. Back-end Web Development

        28. Static vs dynamic API's

section 4: How Node.js Works: A Look Behind the Scenes

30.   Node, V8, Libuv and C++

                  node is made up of V8 & libuv
                      v8 is written with js & C++
                      libuv is written with just C++

                  node also relies on http-parser, c-ares, openSsl, zlib

          31. Processes, Threads and the Thread Pool

                  Single Thread (Sequence of instructions)

                  Initalize Program >
                   Execute "top-level" code >
                    Require modules >
                     Register event callbacks > START EVENT LOOP

                     the event loop can ofload to thread pool

          32. The Node.js Event Loop

                  guidlines for not blocking the event loop

                      dont use sync versions of functions in fs, crypto and zlib modules in your callback functions

                      Dont perform complex calculations(e.g loops inside loops)

                      Be careful with JSON in large objects

                      Dont use too complex regular expressions(e.g nested quantifiers)

          33. The Event Loop in Practice

                   event-loop.js

          34. Events and Event-Driven Architecture

          35. Events in Practice

                  create new file events.js

          36. Introduction to Streams

                  Streams: Used to process (read and write) data piece by piece (chunks), without completing the whole read or write operation, and therefore without keeping all the data in memory

          37. Streams in Practice

                 touch streams.js

          38. How requiring modules really works

          39. reconsole.log(x)

      // console.log('3: done getting dog pics!');quiring modules in practice

sec5 Asunchronous Javascript: Promises and Async/Await

41.   The problem whit Callbacks: Calllback Hell index.js
42.   From callback hell to promises

          index.js

43.   Building Promises

44.   Consuming Promises with Async/Await

45.   Returning Values from Async functions

46.   Waiting for multiple Promises Simultaneously

sec 6 Express

50.   Setting up express and basic routing npm init -y npm i express@4 touch app.js

## 54. Responding to URL Paramiters
