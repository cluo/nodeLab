/**
 * Created by admin on 15-2-1.
 */
var buf = new Buffer(20);
console.log(buf);
buf.fill(1,0,10);
console.log(buf)


var arr_buf = new Buffer([1,2,3,4,5]);
console.log(arr_buf);
console.log(arr_buf.length);
console.log([1,2,3,4,5].length);

var string_buf = new Buffer('你好','utf-8');
console.log(string_buf)
console.log(string_buf.length);
console.log('你好'.length)

var hex_buf = new Buffer('012b','hex');
console.log(hex_buf);

var base64_buf = new Buffer('aabbcc','base64');
console.log(base64_buf);


var ascii_buf = new Buffer('aabbcc','ascii');
console.log(ascii_buf);


var str = 'cluoef';  //字符串不能修改
str[1] = 'b'
console.log(str)

var copy = str.slice(2,4);
console.log(copy);

var str_buf = new Buffer(str);
console.log(str_buf);
var sub_buf = str_buf.slice(2,4);
console.log(sub_buf);
sub_buf[0]= 33;
sub_buf[1]= 44;
console.log(str_buf);

var buf = new Buffer('我爱编程');
console.log(buf);
var str = buf.toString('utf8',3,buf.length);
console.log(str);
//buf.toString('utf8',)
buf.write('爱春玲','utf8',3,buf.length);
console.log( buf.toString() );

var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');
var str = decoder.write(buf);
console.log(str);

var buf = new Buffer('我爱编程');
var json_string = JSON.stringify(buf);
var arr = JSON.parse(json_string);
var buf = new Buffer(arr);
console.log( buf.toString() )

var bool = Buffer.isBuffer(buf);
console.log(bool)

var byte_length = Buffer.byteLength('我爱编程','utf8');
console.log(byte_length);
console.log( '我爱编程'.length );

var bool = Buffer.isEncoding("utf8");
console.log(bool);

var a = Buffer('我爱编程');
b = Buffer(128);
console.log(b);
b.fill(0);
a.copy(b,10);
console.log(b);

var str1 = new Buffer('我');
var str2 = new Buffer('爱');
var str3 = new Buffer('你');

var buf = Buffer.concat([str1, str2, str3]);
console.log(buf);
var str = buf.toString('utf8');
console.log(str)