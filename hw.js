const http = require('http');

function showData(req , res){
    res.write("<h1>Hello World</h1>");
    res.end();
}

http.createServer(showData).listen(5000);
