require('angular')
require('angular-resource')
require('angular-ui-router')
var omsApp = require('./application.js');
omsApp.service("commonService",function($http,$resource){
	var webService_bill = 'http://127.0.0.1:5050';
	console.log(11111111111111)

});
/*	$http.get(webService_bill, {  
	    params: {  
	        name: '张三',  
	        age: 'abc'  
	    }  
	}).then(function (result) {  //正确请求成功时处理  
	    console.info(result);  
	    alert(result.data);  
	}).catch(function (result) { //捕捉错误处理  
	    console.info(result);  
	    alert(result.data.Message);  
	});*/