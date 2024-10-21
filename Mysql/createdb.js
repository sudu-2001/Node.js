var http=require('http');

var mysql=require('mysql');

http.createServer(function(req,res){

	res.writeHead(200, {'Content-Type':'text/html'});

	var conn=mysql.createConnection({

		host: 'localhost',

		user: 'root',

		password: 'Sudu@2001',

		database: 'customerorder'

	});

	conn.connect(function(err){

		if (err) throw err;

		res.write('Connected\n');

		console.log('Connected\n')

	});


	conn.query('select * from customer;',function(err,result){

		if (err) throw err;

		res.write(result);

		console.log('Database Created');

		res.end();

	});

}).listen(8080);

console.log('Running on http://localhost:8080');
