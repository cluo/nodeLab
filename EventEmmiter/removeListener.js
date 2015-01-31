/**
 * Created by admin on 15-1-30.
 */
var http = require('http');
var server = http.createServer();
var count = {};

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


function mark(obj,key){
    console.log(obj);
    if(key in obj){
        obj[key]+=1
    }else{
        obj[key] =0;
    }

}

server.on('request',function(req,res){
    server.emit('bb','arg1','arg2');
    mark(count,'bb');
    server.emit('ready_to_remove');
    mark(count,'ready_to_remove');
    console.log(count);
});

var testFunction1 = function(){
    console.log('function1')
}
var testFunction2 = function(){
    console.log('function2')
}
server.on('ready_to_remove',testFunction1);
server.on('ready_to_remove',testFunction2);

server.removeListener('ready_to_remove',testFunction1);



server.listen('1337','127.0.0.1')