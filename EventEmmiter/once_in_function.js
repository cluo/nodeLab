/**
 * Created by admin on 15-1-30.
 */
var http = require('http');
var server = http.createServer();


server.on('request',function(req,res){
   console.log('持续绑定');
    var status ='ready';
    server.once('bb',function(arg1,arg2){
        if(status=='ready'){
            status='pending';
            console.log(arg1,arg2);
            status='ready';
        }

    });

});


server.on('request',function(req,res){
    server.emit('bb','arg1','arg2');
});

server.listen('1337','127.0.0.1')