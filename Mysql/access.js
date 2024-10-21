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

		if(err) throw err;

		console.log('Connected!');

	});

	conn.query('SELECT * FROM orders;',function(err,result,fields){

		if(err) throw err;

		res.write('<table border="1"> <tr>')

		for(let i=0; i<fields.length; i++){

			res.write('<th>' + fields[i].name + '</th>');

		}

		res.write('</tr>');

		result.forEach(row =>{

			res.write('<tr>');

			for(let key in row){

				res.write('<td>' + row[key] + '</td>');

			}

			res.write('</tr>');

		});

		res.write('</table>');

		res.end();

	});

	console.log('Successfully performed the Query');

}).listen(8080);

console.log('Running on http://localhost:8080');
