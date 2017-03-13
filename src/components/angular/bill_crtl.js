require('jquery')
require('angular')
require('angular-resource')
var omsApp = require('./application.js');
var billService = require('./bill_service.js');
	var webService_bill = 'http://127.0.0.1:5000'
	//console.log('./omsApp')
	omsApp.controller("BillController",['$http','$scope','$rootScope',function($http,$scope,$rootScope) {
		console.log('this is bill_crtl')
		console.log($("input:checkbox:checked").val())
		console.log(webService_bill)
		$http({
			url:webService_bill,
			method:'GET',
			headers:{'Content-Type':'application/x-www-form-urlencoded'}
			}).success(function(data,header,config,status){
			//响应成功
			console.log(data)
			}).error(function(data,header,config,status){
			//处理响应失败
			console.log('shibai失败')
		});
		//date----searchDate:g关键字避免污染混淆
		//var bill_service = "http://127.0.0.1:5000"
		/*$.ajax({
			type:"get",
			url:webService_bill,
			async:true,
			success:function(data){
				console.log(data)
			}
		});*/
		
		
		
		function searchForm(){
			$('button').css('color','red')
			var customer=[];
			var send,pay;
			//时间
			var searchDate = String($('.laydate-icon').val());
			//大客户
			$('input:checkbox').each(function() {
		        if ($(this).attr('checked') == true) {
		            customer.push($(this).val());
		        }
			});
			$('input:radio').each(function(){
			//是否支付
				if($(this).name == ispay && $(this).attr('checked') == true ){
					pay = $(this).val()
				}
			//是否发送
				if($(this).name == issend && $(this).attr('checked') == true ){
					send = $(this).val()
				}
			});
			if(searchDate == ""){
				return true
			};
			if(customer == ""){
				return true
			};
			if(pay == ""){
				return true
			};
			if(send == ""){
				return true
			};
			$('#searchForm').submit();

}
			
			
/*		console.info("--------billController----");
		billService.getlist.success(function(response){
	        $scope.billList = response;
	    });
	   	var webService = ""*/
	}]);
	


