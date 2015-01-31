/**
 * Created by admin on 15-1-30.
 */
var http = require('http');
var server = http.createServer();
server.setMaxListeners(3);
server.on('request',function(req,res){
   if(req.url!='/favicon.ico'){
      console.log(req.url);
   }
   res.end('cluo');
});

server.on('request',function(req,res){
      console.log('event1')
   res.end('cluo');
});


server.on('request',function(req,res){
   console.log('event2')
   res.end('cluo');
});
console.log(server.listeners('request'));

server.listen(1337,'127.0.0.1');

