//事件

var events = require('events');
var emitter = new events.EventEmitter();

// emitter.on('some_event', function(){
// 	console.log('some_event 事件触发');
// });

// setTimeout(function(){
// 	emitter.emit('some_event');
// }, 1000);

// emitter.on('some_event', function(arg1, arg2){
// 	console.log('listen1', arg1, arg2);
// });

// emitter.on('some_event', function(arg1, arg2){
// 	console.log('listen2', arg1, arg2);
// });

// emitter.emit('some_event', '参数1', '参数2');//同名事件依次调用




var listener1 = function listener1(){
	console.log('listener1 执行');
}

var listener2 = function listener2(){
	console.log('listener2 执行');
}

emitter.addListener('connection', listener1);
emitter.addListener('connection', listener2);

var count = events.EventEmitter.listenerCount(emitter, 'connection');
console.log('一共有'+ count+'个侦听器');

emitter.emit('connection');

emitter.removeListener('connection', listener1);

count = events.EventEmitter.listenerCount(emitter, 'connection');
console.log('一共有'+ count+'个侦听器');

emitter.emit('connection');
