/**
 * Created by admin on 15-2-1.
 */
var fs = require('fs');
fs.open('./message.txt', 'r', function(err,fd){
    if(err){
        console.log(err);
    }else{
        var buf = new Buffer(255);
        buf.fill(0);
        console.log(buf);
        fs.read(fd,buf,0,6,0,function(err, bytesRead, buffer){
            console.log(bytesRead);
            console.log(buffer);
            console.log(buffer.slice(0,bytesRead).toString());
            fs.read(fd,buf,6,6,6,function(err, bytesRead, buffer){
                console.log(bytesRead);
                console.log(buffer);
                console.log(buffer.slice(6,(6+bytesRead)).toString());
                fs.close(fd);
            });

        });

    }

})








//fs.open('./message.txt', 'w+', function(err,fd){
//    if(err){
//        console.log(err);
//    }else{
//        console.log(fd);
//    }
//})

