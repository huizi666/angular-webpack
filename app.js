/**
 * Module dependencies.
 */
//1.1引入nodejs模块--是对象
var http = require('http')

//1.2在service.js调用json.js --函数
var myJson = require('./json.js')[0];
console.log(myJson)

http.createServer(function(request, response) {	
	response.setHeader('Access-Control-Allow-Origin','*')
	response.writeHead('200', {
		"Content-Type": "json;charestset=utf-8;"
	});

	var s = myJson();
	//express ejs 渲染模板
	response.write(s)
	response.end();

}).listen(5000)
console.log("my server is strated port is 5000")