/**
 * Created by admin on 15-1-31.
 */
var i =0;
var fun1 = function(){
var fun2 = function(){
var fun3 = function(){
var fun4 = function(){
var fun5 = function(){
    i += 1;
}
    fun5();
}
    fun4();
}
    fun3();
}
    fun2();
}

fun1();
console.log(i);