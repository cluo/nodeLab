var fs = require('fs');

var option = {
    flag:'w+',
    encoding:'utf8'

};
var from_img = 'logo.svg';
var to_img = 'logo1.svg';

fs.readFile(from_img,'utf8',function(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
        fs.writeFile(to_img,data.toString(),function(err){
            console.log('读取成功');
        })
    }

})
