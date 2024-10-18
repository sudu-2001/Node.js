var http=require('http');

var url=require('url');

var fs=require('fs');

http.createServer(function(req,res){

	var q=url.parse(req.url,true);

	var filename="." + q.pathname;

	if(filename === './' || filename === './index.html'){

		filename='./index.html';

	}

	fs.readFile(filename,function(err,data){

		if(err){

			console.log("error is found"+err);

			res.writeHead(404, 'Content-Type:text/html');

			return res.end('File not found');

		}

		res.writeHead(200, 'Content-Type:text/html');

		res.write(data);

		res.end();

	});

}).listen(8080);

console.log("The server is running on http://localhost:8080");
