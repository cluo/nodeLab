/**
 * Created by admin on 15-2-2.
 */
var fs = require('fs');
fs.rmdir('./empty_dir',function(err){
    if(err){
        console.log(err);
    }else{
        console.log('删除目录陈宫');
    }
})
