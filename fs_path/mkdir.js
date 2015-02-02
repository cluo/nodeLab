/**
 * Created by admin on 15-2-1.
 */
var fs = require('fs');
fs.mkdir('./test','0755',function(err){
    if(err){
        console.log(err);
    }else{
        console.log('创建成功');
    }
})
