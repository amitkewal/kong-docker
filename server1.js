var http = require('http');
  
var app = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('charset', 'utf-8');
    res.end(JSON.stringify({ number: 1 , Server: '1'}));
});
  
app.listen(3000);