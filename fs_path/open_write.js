var fs = require('fs');
var buf = new Buffer('我爱编程吗');
fs.open('./message.txt','a+',function(err,fd){
    if(err){
        console.log(err);
    }else{

        fs.write(fd,buf,0,6,0,function(err,written,buffer){
            if(err){
                console.log(err);
            }else{
                console.log(written);
                console.log(buffer.slice(0,written).toString());
                fs.write(fd,buf,6,9,6,function(err,written,buffer){
                    if(err){
                        console.log(err);
                    }else{
                        console.log(written);
                        console.log(buffer.slice(6,(6+written)).toString());
                        fs.close(fd);
                    }
                })
            }

        })

    }

});