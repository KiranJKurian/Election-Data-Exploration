var mysql = require('mysql');

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

/*function(req, res){
	connection.query('SELECT State, Persons_65_years_and_over_percent_2014 FROM states_dem_2016 WHERE Persons_65_years_and_over_percent_2014 > 15', function(err, result){
		if(err){
			console.log(err);
			throw err;
		}
		else{
			console.log(result);
		}
	});

}

function(req, res){
	var instruction = req[0];
	var attribute = req[1];
	var query;
	if(instruction == "lowest"){
		query = 'SELECT State, MIN('+ mysql.escape(attribute) + ') FROM states_dem_2016 GROUP BY '+ mysql.escape(attribute);
	}
	else{
		query = 'SELECT State, MAX('+ mysql.escape(attribute) + ') FROM states_dem_2016 GROUP BY '+ mysql.escape(attribute);
	}
	connection.query(query, function(err, result){
		if(err){
			console.log(err);
			throw err;
		}
		else{
			console.log(result);
		}
	});

}

function(req, res){
	var instruction = req[0];
	var attribute = req[1];
	var number = req[2];
	var year = req[3];
	var table;
	if(year == 2016){
		table = 'states_dem_2016';
	}
	else{
		table = 'race_demographics';
	}
	var query;
	if(instruction == "less"){
		query = 'SELECT State, '+ mysql.escape(attribute) + ' FROM '+ mysql.escape(table)' WHERE '+ mysql.escape(attribute) + '<' + mysql.escape(number);
	}
	else{
		query = 'SELECT State, '+ mysql.escape(attribute) + ' FROM '+ mysql.escape(table)' WHERE '+ mysql.escape(attribute) + '>' + mysql.escape(number);
	}
	connection.query(query, function(err, result){
		if(err){
			console.log(err);
			throw err;
		}
		else{
			console.log(result);
		}
	});
}

var clearWinner = function(req, res){
	connection.query('SELECT * FROM election_data.pres_polls_2016 WHERE Dem-GOP > 10 || GOP-Dem > 10;', function(err, result){
		if(err){
			console.log(err);
			throw err;
		}
		else{
			console.log(result);
		}
	});
};

function(req, res){
	var party = req[0];
	var instruction = req[1];
	var number = req[2];
	var query;
	if(instruction == "greater"){
		query = 'SELECT State, '+mysql.escape(party)+' FROM pres_polls_2016 WHERE '+mysql.escape(party)+' > '+ mysql.escape(number);
	}
	else{
		query = 'SELECT State, '+mysql.escape(party)+' FROM pres_polls_2016 WHERE '+mysql.escape(party)+' < '+ mysql.escape(number);
	}
	connection.query(query, function(err, result){
		if(err){
			console.log(err);
			throw err;
		}
		else{
			console.log(result);
		}
	});
}

function(req, res){
	var party = req[0];
	var instruction = req[1];
	var number = req[2];
	var query;
	if(instruction == "most"){
		query = 'SELECT State, '+mysql.escape(party)+' FROM pres_polls_2016 ORDER BY '+mysql.escape(party)+' DESC LIMIT '+ mysql.escape(number);
	}
	else{
		query = 'SELECT State, '+mysql.escape(party)+' FROM pres_polls_2016 ORDER BY '+mysql.escape(party)+' ASC LIMIT '+ mysql.escape(number);
	}
	connection.query(query, function(err, result){
		if(err){
			console.log(err);
			throw err;
		}
		else{
			console.log(result);
		}
	});
}
*/
var dropDown = function(year, highlow, attribute){
	var table;
	if(year == 2016){
		table = 'states_dem_2016';
	}
	else{
		table = 'race_demographics';
	}
	var query = "SELECT State FROM "+mysql.escape(table)+" ORDER BY "+mysql.escape(attribute);
	if(highlow == "lowest"){
		query += "ASC LIMIT 1";
	}
	else{
		query += "DESC LIMIT 1";
	}
	connection.query(query, function(err, result){
		if(err){
			console.log(err);
			throw err;
		}
		else{
			console.log(result);
			return result;
		}
	});
	connection.end();
}

module.exports = dropDown;
