var fs=require('fs');

fs.writeFile('myfile.txt','Hi Good Evening',function(err){

	if (err) throw err;

	console.log('Written..');

});
