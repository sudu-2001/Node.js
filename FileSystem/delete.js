var fs=require('fs');

fs.unlink('myfile.txt',function(err){

	console.log('Deleted!!');

});
