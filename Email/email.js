var nodemailer=require('nodemailer');

var transporter=new nodemailer.createTransport({

	service:'gmail',

	auth:{

		user:'kosudarshan63@gmail.com',

		pass:'sudu@2468'

	}

	});

var mailoptions={

	from:'kosudarshan63@gmail.com',

	to:'kopsudarshan15@gmail.com',

	subject:"This hell",

	text:"Current is dead bloody"

	}

transporter.sendMail(mailoptions,function(error,info){

	if(error){

		console.log(error);

	}

	else{

		console.log('Email is sent'+info.response);

	}

	});


