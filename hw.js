const http = require('http');
const fs = require('fs'); // Another library
const port = 3000;

function showData(req , res){
    res.writeHead(200 , { 'Content-Type' : 'text/html' });
    fs.readFile('./main.html' , 'utf-8' ,function(err , data){
        //Check the error
        if (err){
            res.writeHead(404); //Not Found
            res.write('Error : File not Found :(');
        }
        else{
            res.write(data);
        }
        res.end();
    })
}

http.createServer(showData).listen(port);
