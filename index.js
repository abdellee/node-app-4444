//importing node framework
var express = require('express');
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('hello world from 4444');
});
//listen to port 4444 by default
app.listen(process.env.PORT || 4444);
 
module.exports = app;
