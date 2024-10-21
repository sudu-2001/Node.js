var http=require('http');

var mysql=require('mysql');

http.createServer(function(req,res){

	res.writeHead(200, {'Content-Type':'text/html'});

	var conn=mysql.createConnection({

		host:'localhost',

		user: 'root',

		password: 'Sudu@2001'

	});

	conn.connect(function(err){

		if (err) throw err;

		console.log("Connected");

		res.write("Connected");

		res.end();

	});

}).listen(8080);

console.log("Running on http://localhost:8080");
