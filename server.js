"use strict";
var http = require('http');
var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var queries = require('./assets/js/queries.js');
var app = express();

app.use( bodyParser.urlencoded( {
    extended: true
} ) );

app.use( bodyParser.json() );

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
  else{
    return str;
  }
  return stripQuote(str);
}

const wrapSpecial = (str) => {
  const specialExp = new RegExp(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/);
  return specialExp.test(str) ? '`'+str+'`' : str
}

const runQuery = (query, res) => {
  connection.query(query, function(err, result){
    if(err){
      console.log(err);
      res.send(JSON.stringify({ error: 'Bad Query' }));
    }
    else{
      console.log(result);
      res.send(JSON.stringify(result));
    }
  });
};

const getStateAnalysisNormalQuery = (body) => {
  let table;
  let year = body.year, highlow = body.highlow, attribute = body.attribute;

  attribute = stripQuote(wrapSpecial(attribute));

  if(year == 2016){
    table = 'states_dem_2016';
  }
  else{
    table = 'race_demographics';
  }
  let query = `SELECT State FROM ${table} ORDER BY ${attribute}`;
  if(highlow == "lowest"){
    query += " ASC LIMIT 1";
  }
  else{
    query += " DESC LIMIT 1";
  }
  return query;
};

// Input: { year, attribute, highlow, party, number }
// Output: [{ State1 }, { State2 }]
app.get('/poll1', function(req, res){
  console.log("Req Query:");
  console.log(req.query);

  var table;
  var query;
  if(req.query.year == 2016){
    table = 'states_dem_2016';
  }
  else{
    table = 'race_demographics';
  }
  if(req.query.highlow == "less"){
    var query = "SELECT st.State FROM "+ stripQuote(table) + " st, state_winners wt WHERE st.State = wt.State AND st."+stripQuote(mysql.escape(req.query.attribute))+ "<"+stripQuote(mysql.escape(req.query.number.replace('***_***', '-')))+" AND wt.Year = "+ stripQuote(mysql.escape(req.query.year))+ " AND wt.Winner = "+mysql.escape(req.query.party);
  }
  else{
    var query = "SELECT st.State FROM "+ stripQuote(table) + " st, state_winners wt WHERE st.State = wt.State AND st."+stripQuote(mysql.escape(req.query.attribute))+ ">"+stripQuote(mysql.escape(req.query.number.replace('***_***', '-')))+" AND wt.Year = "+ stripQuote(mysql.escape(req.query.year))+ " AND wt.Winner = "+mysql.escape(req.query.party);
  }
  console.log(query);
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

const getStateAnalysisCustomQuery = (body) => {
  let table;
  let year = body.year, highlow = body.highlow, attribute = body.attribute, party = body.party, number = body.number;

  attribute = stripQuote(wrapSpecial(attribute));

  if(year == 2016){
    table = 'states_dem_2016';
  }
  else{
    table = 'race_demographics';
  }
  let query;
  if(year == 2016){
  	if(highlow == "less"){
  		query = `SELECT wt.State FROM ${table} st, state_winners wt WHERE st.State = wt.State AND st.${attribute}<${number} AND wt.Year = ${year} AND wt.Winner = '${party}'`;
  		return query;
  	}else{
  		query = `SELECT wt.State FROM ${table} st, state_winners wt WHERE st.State = wt.State AND st.${attribute}>${number} AND wt.Year = ${year} AND wt.Winner = '${party}'`;
  		return query;
  	}
  }
  if(highlow == "less") {
    query = `SELECT wt.State FROM ${table} st, state_winners wt WHERE st.State = wt.State AND st.${attribute}<${number} AND wt.Year = ${year} AND wt.Winner = '${party}'`;
  }
  else{
    query = `SELECT wt.State FROM ${table} st, state_winners wt WHERE st.State = wt.State AND st.${attribute}>${number} AND wt.Year = ${year} AND wt.Winner = '${party}'`;
  }
  console.log("Query:");
  console.log(query);
  return query;
};

app.post('/query', function(req, res){
  const body = req.body;
  try {
    let query = "";
    switch(body.type) {
      case 'stateAnalysisNormal':
        query = getStateAnalysisNormalQuery(body);
        break;
      case 'stateAnalysisCustom':
        query = getStateAnalysisCustomQuery(body);
        break;
    }
    runQuery( query, res );
  }
  catch(err) {
    console.log(err);
    res.send(req.body);
  }
});


app.get('/bundle.js', function(req, res){
	res.sendFile(__dirname + "/assets/js/bundle.js")
});



/*******START SERVER*******/
app.listen((8080 || process.env.port), function() {
  console.info('Express server started at http://localhost:' + (8080 || process.env.port));
});
