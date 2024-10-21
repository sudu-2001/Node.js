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

		console.log('Connected');

		res.write('Connected');

	});

	conn.query('SELECT * FROM customer;' ,function(err,result,fields){

		res.write('<table border="1"> <tr>');

		for(let feild in fields){

			res.write('<th>' + feild.name + '</th>');

		}

		result.forEach(row=>{

			res.write('<tr>');

			for(let key in row){

				res.write('<td>' + row[key] + '</td>');

			}

			res.write('</tr>');

		});

		res.write('</table>');

		res.end();

	});

	console.log('Query Executed Successfully');

}).listen(8080);

console.log('Running on http://localhost:8080');
