var fs=require('fs');

fs.appendFile('file.txt','Hi, its sudarshan', function(err){

	console.log('Apppended');

});
