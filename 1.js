var http = require('http');


http.createServer(function (request, response){

	if(request.uri!=='/favicon.ico'){//清除二次访问
		console.log('访问');
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World!');
	}

}).listen(8080);

console.log('Server running');