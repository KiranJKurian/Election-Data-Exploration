"use strict";
import mysql from 'mysql';

/*******DB CONNECTION *******/
const connection = mysql.createConnection({
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


/*******QUERIES*******/

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

export const runQuery = (query, res) => {
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

export const showdb = (res) => {
  connection.query("SHOW TABLES IN election_data", function(err, result){
    if(err){
      console.log(err);
      res.send(JSON.stringify({ error: 'Bad Query' }));
    }
    else{
      var final = [];
      //console.log("Result: \n");
      //console.log(result);
      let j = 0;
      for(var i = 0; i < result.length; i++){
        let x = result[i].Tables_in_election_data;
          connection.query(`SELECT * FROM ${result[i].Tables_in_election_data}`, function(err, rows){
           
            if(err){
              console.log(err);
              res.send(JSON.stringify({ error: 'Bad Query' }));
            }
            else{
              //console.log(x);
              var tempObj = {};
              tempObj[x] = rows;
              final[j] = tempObj;
              j++;
              if(j == result.length){
              //console.log(final);
              res.send(JSON.stringify(final));
             }
            }
          });    
      }
    }
  });
};

export const getStateAnalysisNormalQuery = (body) => {
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

export const getStateAnalysisCustomQuery = (body) => {
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
      query = `SELECT DISTINCT wt.State FROM ${table} st, state_winners wt WHERE st.State = wt.State AND st.${attribute}<${number} AND wt.Year = ${year} AND wt.Winner = '${party}'`;
      return query;
    }else{
      query = `SELECT DISTINCT wt.State FROM ${table} st, state_winners wt WHERE st.State = wt.State AND st.${attribute}>${number} AND wt.Year = ${year} AND wt.Winner = '${party}'`;
      return query;
    }
  }
  if(highlow == "less") {
    query = `SELECT DISTINCT wt.State FROM ${table} st, state_winners wt WHERE st.State = wt.State AND st.${attribute}<${number} AND wt.Year = ${year} AND wt.Winner = '${party}'`;
  }
  else{
    query = `SELECT DISTINCT wt.State FROM ${table} st, state_winners wt WHERE st.State = wt.State AND st.${attribute}>${number} AND wt.Year = ${year} AND wt.Winner = '${party}'`;
  }
  console.log("Query:");
  console.log(query);
  return query;
};
