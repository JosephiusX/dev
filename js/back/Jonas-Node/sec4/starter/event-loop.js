const fs = require('fs');
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 2; // sets our thread pool from 4 to 1


fs.readFile('testevent-file.txt', () => {
    console.log('I/0 finished')
    console.log('------------')


    setTimeout(() => console.log("Timer 2 finished"), 0);
    setTimeout(() => console.log("Timer 3 finished"), 3000);
    setImmediate(() => console.log("Immidiate 2 finished"));

    process.nextTick(()=>console.log('process.nextTick'));

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, "Password encrypted")
    })
    
});