//流 Stream

var fs = require('fs');
var zlib = require('zlib');


//读
// var data = '';
// var readStream = fs.createReadStream('Res/input.txt'); 
// readStream.setEncoding('UTF8');

// readStream.on('data', function(chunk){
// 	console.log(chunk);
// 	data = data+chunk;
// });

// readStream.on('end', function(){
// 	console.log('数据读取完毕', data);
// });

// readStream.on('error', function(err){
//    console.log(err.stack);
// });

// console.log("程序执行完毕");





//写
// var data = 'https://github.com/LeoChensj NB';
// var writeStream = fs.createWriteStream('Res/output.txt');
// writeStream.write(data, 'UTF8');
// writeStream.end();

// writeStream.on('finish', function(){
// 	console.log('写入文件完成');
// });

// writeStream.on('error', function(err){
//    console.log(err.stack);
// });

// console.log("程序执行完毕");





//管道
// var readStream = fs.createReadStream('Res/input.txt'); 
// var writeStream = fs.createWriteStream('Res/output.txt');

// readStream.pipe(writeStream);

// readStream.on('end', function(){
// 	console.log('数据读取完毕');
// });

// writeStream.on('finish', function(){
// 	console.log('写入文件完成');
// });

// console.log("程序执行完毕");







//链式流
//压缩
// var readStream = fs.createReadStream('Res/res.txt'); 
// var writeStream = fs.createWriteStream('Res/res.txt.gz');
// readStream.pipe(zlib.createGzip()).pipe(writeStream);

// console.log("文件压缩完成。");


//解压
var readStream = fs.createReadStream('Res/res.txt.gz'); 
var writeStream = fs.createWriteStream('Res/uzip.txt');

readStream.pipe(zlib.createGunzip()).pipe(writeStream);

console.log("文件解压完成。");




























