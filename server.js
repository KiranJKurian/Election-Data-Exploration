var http = require('http');
var express = require('express');
var mysql = require('mysql');
var queries = require('./assets/js/queries.js');
var app = express();
app.use('/assets', express.static('assets'));

/*******DB CONNECTION *******/
/*var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'election_data',
});

connection.connect(function(err){
	if(err){
		console.log("Error connecting to db");
    	console.log(err);
		return;
	}
	else
		console.log("Connected to db");

});

connection.end();*/

/*******ROUTES*******/
app.get('/', function(req,res){
	res.sendFile(__dirname + "/assets/views/app.html");
});




app.get('/bundle.js', function(req, res){
	res.sendFile(__dirname + "/assets/js/bundle.js")
});


/*******START SERVER*******/
app.listen((8080 || process.env.port), function() {
  console.info('Express server started at http://localhost:' + (8080 || process.env.port));
});
