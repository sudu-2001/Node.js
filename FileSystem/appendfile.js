var fs=require('fs');

fs.appendFile('myfile.txt','hello buddy',function(err){

	if(err) throw err;

	console.log('Saved!!');

});
