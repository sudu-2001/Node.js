var http=require('http');

var mysql=require('mysql');

http.createServer(function(req,res){

	res.writeHead(200, { 'Content-Type' : 'text/html' });

	var conn=mysql.createConnection({

		host: 'localhost',

		user: 'root',

		password: 'Sudu@2001',

		database: 'customerorder'

	});

	conn.connect(function(err){

		if (err) throw err;

		console.log('Connected !!');

		res.write('Connected !!');

	})

	conn.query('Select * from customer;',function(err,result){

		if (err) throw err;

		console.log(result);

		res.write(result);

		res.end();

	});

}).listen(8080);

console.log("This is listening in http://localhost:8080");
