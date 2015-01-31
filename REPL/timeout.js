var testFunction = function(msg){
   console.log(msg);
}

var timer = setTimeout(testFunction,'1000','传入消息');
