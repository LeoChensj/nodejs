//路由

function user(app) {
  
  app.get('/', function (req, res) {
		console.log('主页，get请求');
	   	res.send('Hello Get');
	})

	app.post('/', function (req, res) {
	   console.log("主页 POST 请求");
	   res.send('Hello POST');
	})

	app.delete('/del_user', function (req, res) {
	   console.log("/del_user 响应 DELETE 请求");
	   res.send('删除页面');
	})

	app.get('/list_user', function (req, res) {
	   console.log("/list_user GET 请求");
	   res.send('用户列表页面');
	})

	app.post('/update_user', function (req, res) {
	   console.log("/list_user GET 请求");
	   res.send('更新用户信息');
	})

}

exports.user = user;