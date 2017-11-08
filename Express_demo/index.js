var express = require('express');
var router = require("./router");

var app = express();

router.user(app);

app.post('/update_user', function (req, res) {
   console.log("/list_user GET 请求");

   res.send('更新用户信息');
})

 
var server = app.listen(8888);