var http=require('http');

http.createServer(function(req,res){

    res.writeHead(200,{'COntent-Type':'text/html'})

    res.end('Hello World');

}).listen(8080);