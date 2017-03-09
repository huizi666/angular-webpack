require('angular')
require('angular-resource')
require('angular-ui-router')

	var webService_bill = 'http://127.0.0.1:4040'
	
	omsApp.controller("billController",['billService', function($http,$scope,$rootScope,billService) {
		console.log('this is bill_crtl')
		console.log($("input:checkbox:checked").val())
		console.log(webService_bill)
		$http.get(webService_bill).then(function($response){
			console.log($response)
		})
		//date----searchDate:g关键字避免污染混淆
		//var bill_service = "http://127.0.0.1:5000"
		$.ajax({
			type:"get",
			url:"http://127.0.0.1:5000",
			async:true,
			success:function(data){
				console.log(data)
			}
		});
		
		
		
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
	


