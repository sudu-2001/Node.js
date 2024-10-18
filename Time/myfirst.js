var http=require('http');

var dt=require('./firstmodule.js');

http.createServer(function(req,res){

	res.writeHead(200, 'Content-Type:text/html');

	res.write("The current date and time is: "+dt.myDateTime());

	res.end("Byee!!");

}).listen(8080);
