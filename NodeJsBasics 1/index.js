// console.log("This is coming from Nodejs");
var http = require("http");
http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("This is coming from server");
    res.end();
    
}).listen(4000);



