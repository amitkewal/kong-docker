// var connect = require('connect');
// var http = require('http');
 
// var app = connect();

// // respond to all requests
// app.use(function(req, res){
//   res.end('Hello from Connect!\n');
// });
 
// //create node.js http server and listen on port
// http.createServer(app).listen(8002, () => console.log('Server running on 8002...'));


var http = require('http');
  
var app = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('charset', 'utf-8');
    res.end(JSON.stringify({ number: 2 , Server: '2'}));
});
  
app.listen(8002);