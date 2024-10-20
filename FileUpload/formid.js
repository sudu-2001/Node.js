var http=require('http');

var formidable=require('formidable');

http.createServer(function(req,res){

	if(req.url == '/fileupload'){

		var form=new formidable.IncomingForm();

		form.parse(req,function(err,fields,files){

			res.writeHead(200, {'Content-Type':'text/html'});

			res.write('File uploaded');

			res.end();

		});

	}


	else{

		res.writeHead(200, {'Content-Type':'text/html'});

		res.write('<form action="fileupload" method="post" enctype="multipar/form-data">');

		res.write('<input type="file" type="fileupload"><br>');	

		res.write('<input type="submit">');

		res.write('</form>');

	}

}).listen(8080);

console.log('Running on http://localhost:8080');
