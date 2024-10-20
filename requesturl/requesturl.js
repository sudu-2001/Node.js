var http=require('http');

http.createServer(function(req,res){

	res.writeHead(200,'{Content-Type:text/html}');

	res.write(req.url);

	res.end('Byee!!!');

}).listen(8080);

console.log('Running on http://localhost:8080');
