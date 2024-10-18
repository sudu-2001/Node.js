var fs=require('fs');

fs.rename('myfile.txt','file.txt',function(err){

	if (err) throw err;

	console.log('File Renamed.');

});
