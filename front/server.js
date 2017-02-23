"use strict"

const http = require("http");
const fs = require("fs");

const server = http.createServer(function(req,res){
    const text = fs.readFileSync("index.html","utf8"); 
    res.write(text);
    res.end();
});
console.log('server is running');
const port = process.env.PORT || 3000;
server.listen(port);
