var http=require('http');

var fs=require('fs');

http.createServer(function(req,res){

	fs.readFile('j.html', function(err,data){

		res.writeHead(200, {'Content-Type':'text/html'});

		res.write(data);

		return res.end();

	});

}).listen(8080);

console.log('Running on http://localhost:8080')
