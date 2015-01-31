var repl = require('repl');
var con = repl.start().context;
con.msg='消息';
con.testFun = function(){ 
   console.log(con.msg);
}
