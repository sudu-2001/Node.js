var http=require('http');

var dt=require('./firstmodule');

http.createServer(function(req,res){

    res.writeHead(200,{'Content-type':'text/html'});

    res.write("The current date and time is: "+dt.myDateTime());

    res.end("Bye!");

}).listen(8080);