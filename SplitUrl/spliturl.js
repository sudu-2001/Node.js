var http=require('http');

var url=require('url');

var fs=require('fs');

http.createServer(function(req,res){

	var q=url.parse(req.url,true);

	var filename= '.' + q.pathname;

	if(filename === './' || filename === '/index.html'){

		return filename='./index.html';

	}

	fs.readFile(filename,function(err,data){

		if(err){

			console.log('Error Found!'+err);

			res.writeHead(404, 'Content-Type:text/html');

			return res.end('File Not Found');

		}

		res.writeHead(200, 'Content-Type:text/html');

		res.write(data);

		res.end("Bye");

	});

}).listen(8080);

console.log('http://localhost:8080/winter.html');
