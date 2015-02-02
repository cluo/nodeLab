/**
 * Created by admin on 15-2-2.
 */
var fs = require('fs');
var options =  {
    persistent:true,
    interval:1*1000

};
var listener = function(curr,prev){
    if(Date.parse(prev.ctime) == 0){
        console.log('文件被创建');
    }else if(Date.parse(curr.ctime)==0){
        console.log('文件被删除');
    }else if(Date.parse(prev.mtime) != Date.parse(curr.mtime)){
        console.log('文件被修改');
    };
}

var listener1 = function(curr,prev){
    if(Date.parse(curr.ctime)!=0){
        console.log('文件尺寸:'+curr.size+'字节');
    }
}
fs. watchFile('./test_watchFile',options,listener);
fs. watchFile('./test_watchFile',options,listener1);



fs.unwatchFile('./test_watchFile',listener);