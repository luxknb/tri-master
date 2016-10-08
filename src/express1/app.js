var express = require("express")
var app = express();

//静态托管文件
app.use(express.static('./public'))

app.get("/",function(req,res) {
	res.send("root")
})
//接口配置 如果只要静态资源的话可以省略
app.get("/list",function(req,res) {
	var jsonext = req.url.split("callback=")[1]
	var jsonp = jsonext+"("+JSON.stringify({"username":"luxk","password":"123"})+")"
	res.send(jsonp)
})

var server = app.listen(3333,function() {
	var host = server.address().address;
	var port = server.address().port;
})