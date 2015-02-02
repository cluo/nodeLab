var Foo = require('./module_exports.js');
var foo = new Foo('cluo',30);
var name = foo.GetName();
console.log(name);
console.log(foo.GetAge());
foo.SetName('chunling');
foo.SetAge(11)
console.log(foo.GetName());
console.log(foo.GetAge());

foo.name='laogong';
foo.age = 26;

console.log(foo.name);
console.log(foo.age);



