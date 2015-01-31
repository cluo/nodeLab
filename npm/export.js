/**
 * Created by admin on 15-1-31.
 */
//散应用时候
var current = 'cluo';
var getName = function(){
    return  current;
};

var setName = function(name){
    current = name;
};

exports.name = current;
exports.getName = getName;
exports.setName = setName;