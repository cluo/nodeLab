var user = {}
user.name = "cluo"
user.getName = function(){ return this.name };
user.setName = function(name){ this.name = name};
console.log('require will run every command');
exports.user = user;

