//get post

var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');


http.createServer(function(request, response){

		var pathname = url.parse(request.url).pathname;
	    console.log("Request for" + pathname);

	    if(pathname!='/post')//get
	    {
	    	var params = url.parse(request.url, true).query;
	    	response.writeHead(200, {"Content-Type": "text/plain"});
	    	response.write(util.inspect(params));
	    	response.end();
	    }
	    else//post
	    {
	    	console.log('post方法');

	    	var post = '';

	    	request.on('data', function(thunk){
	    		post += thunk;
	    	});

	    	request.on('end', function(thunk){
	    		var temp = querystring.parse(post);
	    		response.writeHead(200, {"Content-Type": "text/plain"});
	    		response.write(util.inspect(temp));
        		response.end();
	    	});
	    }

	    // response.writeHead(200, {"Content-Type": "text/plain"});
	    // response.write("Hello World");
	    // response.end();

	}).listen(8888);

console.log('服务器开始运行');
