/**
 * Created by admin on 15-2-2.
 */
var fs = require('fs');
var options = {
  interval : 1000*1,
  persistent:true
};
var watcher = fs.watch('./test',options,function(event,filename){
    console.log(event);
    console.log(filename);
});
watcher.close();


var watcher = fs.watch('./test');
watcher.on('change',function(event,filename){
    console.log(event);
    console.log(filename);
})

