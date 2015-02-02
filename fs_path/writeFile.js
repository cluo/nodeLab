var fs = require('fs');
var str= "hello world"
var option = {
  flag:'a+',
  encoding:'utf8'

};

fs.writeFile('./fill.html', 'hello world',option,function(err){
    if(err){
        console.log(err);
    }else{
        fs.readFile('./fill.html','utf8',function(err,data){
            if(err){
                console.log(err);
            } else{
                console.log(data);
            }
        });
    }
});

var option = {
    flag:'w+',
    encoding:'utf8'

};
var new_file = './create_file.html';
fs.writeFile(new_file,'hello world',option,function(err){
    if(err){
        console.log(err);
    }else{
        fs.readFile(new_file,'utf8',function(err,data){
            if(err){
                console.log(err);
            } else{
                console.log(data);
            }
        });
    }
});