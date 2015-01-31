var name_1 = require('./export.js');
var name_2 = require('./export.js');
console.log(name_1.name)
console.log(name_2.name);
name_1.setName('chunling');
var name = name_2.getName();
console.log(name);
var name = name_1.getName();
console.log(name);

