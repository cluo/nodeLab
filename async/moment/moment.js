/**
 * Created by admin on 15-2-4.
 */
var moment = require('moment'),
    twix = require('twix');
function now(){
    return moment().format('YYYY-MM-DD HH:mm:ss');
}
console.log(now());


var bool = moment("1982-05-25").twix("1982-05-28").contains("1982-05-26"); //=> true
console.log(bool);

var hours = moment("1982-05-25 5:30").twix("1982-05-25 6:30").length("hours")  //=> 1
var days = moment("1982-05-25 5:00").twix("1982-05-30 6:00").length("days")
console.log(hours);
console.log(days);
console.log(moment());
