var express = require('express');
var app = express();
app.use(express.json())
const fs = require("fs");
const port = 3001;
const uuid = require("uuid");

app.get('/users/:userId', function (req, res) {
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
     var users = JSON.parse( data );
     var user = users[req.params.userId] 
     console.log( user );
     res.json(user);
  });
})

app.get('/users', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.setHeader('Content-Type', 'application/json');
      res.end(data);
   });
})

app.listen(port, function () {
   console.log(`Example app listening at ${port}`)
})