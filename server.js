const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const db = require('./config/db');

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({extended:true}));

MongoClient.connect(db.url,(err,client) =>{
    console.log(err)
 //   const db = client.db;
    console.log(db)
   var db = client.db('mongo');
    console.log(db)
    if (err) return console.log(err)
    //require('./app/routes')(app,{});
    //check below line changed
    console.log('db')
    require('./app/routes')(app, db);
    app.listen(port,() => {
        console.log("We are live on"+port);
    });

});