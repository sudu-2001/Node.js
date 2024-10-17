var http=require('http');

http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type':'txt/html'});

    res.write(req.url);

    res.end('Byee!');

}).listen(8080);