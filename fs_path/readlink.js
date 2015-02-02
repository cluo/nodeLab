/**
 * Created by admin on 15-2-2.
 */

var fs = require('fs')
fs.readlink(__dirname+'/test_symlink',function(err,linkString){
    if(err){
        console.log(err);
    }else{
        console.log(linkString);
    }
});


fs.symlink('./test/new_test.txt','./new_test_symlink.txt',function(err){
    if(err){
        console.log(err);
    }else{
        console.log('创建链接文件成功');
        fs.readlink('./new_test_symlink.txt',function(err,linkString){
            if(err){
                console.log(err);
            }else{
                console.log(linkString);
            }
        });

    }
})