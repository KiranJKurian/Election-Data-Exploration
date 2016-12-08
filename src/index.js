"use strict";
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import * as queries from './queries';

const app = express();

app.use( bodyParser.urlencoded( {
    extended: true
} ) );

app.use( bodyParser.json() );

app.use(express.static(path.join(__dirname, '../assets')));

/*******ROUTES*******/
app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, '../assets/views/app.html'));
});

app.post('/query', function(req, res){
  const body = req.body;
  try {
    let query = "";
    switch(body.type) {
      case 'stateAnalysisNormal':
        query = queries.getStateAnalysisNormalQuery(body);
        break;
      case 'stateAnalysisCustom':
        query = queries.getStateAnalysisCustomQuery(body);
        break;
    }
    queries.runQuery( query, res );
  }
  catch(err) {
    console.log(err);
    res.send(req.body);
  }
});

app.get('/db', function(req, res){
  var result = queries.showdb(res);

  res.render('db',result);

});


app.get('/bundle.js', function(req, res){
  res.sendFile(path.join(__dirname, '../assets/js/bundle.js'))
});

/*******START SERVER*******/
app.listen((8080 || process.env.port), function() {
  console.info('Express server started at http://localhost:' + (8080 || process.env.port));
});
