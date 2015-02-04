var async = require('async');
var moment = require('moment'),
    twix = require('twix');

//需求描述

//基于Nodejs的express3构建的web框架，需要在周一至周五，早上9点15分时，分别启动程序A和程序B，程序C。下午16点程序A,B,C停止。
//
//程序A: 每1秒去redis取数据一次，保留在Nodejs的全局变量G中。
//程序B: 每10秒去mysql取数据一次，通过websocket直接访问给客户端。
//程序C: 每5秒对全局变量G，进行平均值计算，然后通过websocket直接访问给客户端。
//全局变量G
var G = 0;
//日志时间格式化
function now() {
   return moment().format("HH:mm:ss");
}
//模拟程序A
function A() {
   console.log(now() + " A(s1)=> {G:" + (G++) + "} Cache G");
}

//模拟程序B
function B() {
   console.log(now() + " B(s10)=> {B:10} TO client");
}

//模拟程序C
function C() {
   console.log(now() + " C(s5)=> {G:" + (G / 5) + "} TO client");
   G = 0;
}


function isTime(){
   var hms = 'HHmmss';
   return moment("091500",hms).twix(moment("230000",hms)).contains(moment());
}

var arr = [
   {fun: A, delay: 1000, test: isTime},
   {fun: B, delay: 10 * 1000, test: isTime},
   {fun: C, delay: 5 * 1000, test: isTime}
];

async.each(arr, function (item, callback) {
   async.whilst(item.test,function(cb) {
          item.fun();
          setTimeout(cb, item.delay);
       },function(err) {
          console.log("Not working time!");
       }
   );
}, function (err) {
   console.log('Error: ' + err);
});