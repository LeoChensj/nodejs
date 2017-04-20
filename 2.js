//文件

var fs = require('fs');

fs.readFile('Res/res.txt', function (err, data){

	if(err) return console.error(err);
	console.log(data.toString());
});

console.log('开始读文件');