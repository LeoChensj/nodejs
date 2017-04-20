//事件循环

var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('connetction', function(){
	console.log('连接成功');

	eventEmitter.emit('recv');
});

eventEmitter.on('recv', function(){
	console.log('接受到数据');
});

eventEmitter.emit('connetction');

console.log('程序结束');