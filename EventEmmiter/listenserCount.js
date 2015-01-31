/**
 * Created by admin on 15-1-30.
 */
var http = require('http');
var events = require('events')
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
    server.emit('ready_to_remove');
    server.emit('function3');
});

var testFunction1 = function(){
    console.log('function1')
}
var testFunction2 = function(){
    console.log('function2')
}
var testFunction3 = function(){
    console.log('function3')
}
server.on('ready_to_remove',testFunction1);
server.on('ready_to_remove',testFunction2);
var count = events.EventEmitter.listenerCount(server,'ready_to_remove');
console.log(count);
server.on('function3',testFunction3);
server.removeAllListeners('ready_to_remove');
var count = events.EventEmitter.listenerCount(server,'ready_to_remove');
console.log(count)



server.listen('1337','127.0.0.1')