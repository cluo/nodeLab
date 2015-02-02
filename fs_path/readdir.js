/**
 * Created by admin on 15-2-1.
 */
var fs = require('fs');
fs.readdir('./test',function(err,files){
    if(err){
        console.log(err);
    }else{
        console.log(files);
    }
})

fs.stat('./test',function(err,stat){
    console.log(stat);
});

fs.exists('./test',function(exists){
    if(exists){
        console.log('存在');
    }else{
        console.log('不存在');
    }
})
fs.utimes('./message.txt',new Date(),new Date(),function(err){
   if(err){

   }else{
       console.log('修改访问时间,修改时间成功')
   }
});

fs.open('./message.txt','a+',function(err,fd){
    fs.futimes(fd,new Date(),new Date,function(err){
        if(err){

        }else{
            console.log('修改成功');
        }
    });
    fs.fchmod(fd,0755,function(err){
        if(err)
        {
            console.log(err);
        }else{
            console.log('修改成功')
        }

    })
})

fs.chmod('./message.txt','0755',function(err){
    if(err){
        console.log(err);
    }else{
        console.log('修改权限成功')
    }
})

fs.rename('./test/test.txt','./test/new_test.txt',function(err){
    if(err){
        console.log(err);
    }else{
        console.log('成功')
    }
})

fs.link('./test/new_test.txt','./test/new_test_1.txt',function(err){
    if(err){
        console.log(err);
    }else{
        console.log('硬链接成功');
        fs.unlink('./test/new_text_1.txt',function(err){
            if(err){
                console.log(err);
            }else{
                console.log('删除成功')
            }
        })
    }
});

fs.symlink('./test','./test_symlink','dir',function(err){
    if(err){
        console.log(err);
    }else{
        fs.symlink(__dirname+'/test/new_test.txt',__dirname+'/test_symlink/new_test.txt','file',function(err){
            console.log(err);
        })
    }
})

