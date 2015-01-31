/**
 * Created by admin on 15-1-30.
 */
var http = require('http');
var server = http.createServer();
server.once('request',function(req,res){
   console.log('绑定一次请求地址'+req.url)
});

server.on('request',function(req,res){
   console.log('持续绑定');
});

server.once('request',function(req,res){
    console.log('绑定一次请求地址'+req.url)
});

server.listen('1337','127.0.0.1')
