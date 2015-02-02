/**
 * Created by admin on 15-2-1.
 */
var fs = require('fs');
try{
    var data = fs.readFileSync('./test1.html','utf8');
    console.log(data);
    console.log('end');

}catch(ex){
    console.log(ex);
}

try{
    var data = fs.readFileSync('./bbb.html','utf8');
    console.log(data);
    console.log('end');

}catch(ex){
    console.log(ex);
}



fs.readFile('./test1.html','utf8',function(err,data){
    console.log(data);
    fs.readFile('./test2.html','utf8',function(err,data){
        console.log(data);

    });
});


console.log('end');



fs.readFile('./test1.html',function(err,data){
    console.log(data);
    console.log(data.toString());
    fs.readFile('./test2.html',function(err,data){
        console.log(data);
        console.log(data.toString());
        fs.readFile('./xxx.html',function(err,data){
            if(err){
                console.log(err);
            }

        });
    });
});
