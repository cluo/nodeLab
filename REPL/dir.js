var user = new Object();
user.name = "cluo"
user.getName = function(){ return this.name;}
user.setName = function(name){  this.name = name;}
console.dir(user);
