var http = require('http');
var express = require('express');
var mysql = require('mysql');
var queries = require('./assets/js/queries.js');
var app = express();
app.use('/assets', express.static('assets'));

/*******DB CONNECTION *******/
var connection = mysql.createConnection({
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

// connection.end();

/*******ROUTES*******/
app.get('/', function(req,res){
	res.sendFile(__dirname + "/assets/views/app.html");
});
const stripQuote = (str) => {
  if(str[0] == "'" && str[str.length-1] == "'"){
    str = str.substring(1, str.length-1);
  }
  return str;
}
app.get('/dropDown', function(req, res){
  console.log("Req Query:");
  console.log(req.query);
  var table;
	if(req.query.year == 2016){
		table = 'states_dem_2016';
	}
	else{
		table = 'race_demographics';
	}
	var query = "SELECT State FROM "+stripQuote(mysql.escape(table))+" ORDER BY "+stripQuote(mysql.escape(req.query.attribute));
	if(req.query.highlow == "lowest"){
		query += " ASC LIMIT 1";
	}
	else{
		query += " DESC LIMIT 1";
	}
	connection.query(query, function(err, result){
		if(err){
			console.log(err);
			throw err;
		}
		else{
			console.log(result);
			res.send(JSON.stringify(result));
		}
	});
	// connection.end();
});

// Input: { year, attribute, highlow, party }
// Output: [{ State1 }, { State2 }]
app.get('/poll1', function(req, res){
	var table;
	var query;
	if(req.query.year == 2016){
		table = 'states_dem_2016';
	}
	else{
		table = 'race_demographics';
	}
	if(req.query.highlow == "less"){
		var query = "SELECT st.State FROM "+ stripQuote(table) + " st, state_winners wt WHERE st.State = wt.State AND st."+stripQuote(mysql.escape(req.query.attribute))+ "<"+stripQuote(mysql.escape(req.query.number))+" AND wt.Year = "+ stripQuote(mysql.escape(req.query.year))+ " AND wt.Winner = "+stripQuote(mysql.escape(req.query.party));
	}
	else{
		var query = "SELECT st.State FROM "+ stripQuote(table) + " st, state_winners wt WHERE st.State = wt.State AND st."+stripQuote(mysql.escape(req.query.attribute))+ ">"+stripQuote(mysql.escape(req.query.number))+" AND wt.Year = "+ stripQuote(mysql.escape(req.query.year))+ " AND wt.Winner = "+stripQuote(mysql.escape(req.query.party));
	}
	connection.query(query, function(err, result){
		if(err){
			console.log(err);
			throw err;
		}
		else{
			console.log(result);
			res.send(JSON.stringify(result));
		}
	});
});


app.get('/bundle.js', function(req, res){
	res.sendFile(__dirname + "/assets/js/bundle.js")
});


/*******START SERVER*******/
app.listen((8080 || process.env.port), function() {
  console.info('Express server started at http://localhost:' + (8080 || process.env.port));
});
