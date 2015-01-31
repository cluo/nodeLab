console.log(__dirname+'/module.js');
var user = require(__dirname+"/module.js");
if(module == require.main){
   console.log("this is main module");
}  
var user = user['user'];
user.setName('cluo');
var name = user.getName()
console.log(name)



