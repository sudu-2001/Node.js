var http=require('http');

var dt=require('./firstmodule.js');

http.createServer(function(req,res){

	res.writeHead(200, 'Content-Type:text/html');

	res.write('The current date and time is: '+ dt.myDateTime());

	res.end('byee');

}).listen(8080);

console.log('Running on http://localhost:8080')
