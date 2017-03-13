require('jquery')
require('angular')
require('angular-resource')
	var webService_bill = 'http://127.0.0.1:5050'
	omsApp.service("billService", function($http,$resource) {
		$http.get(webService_bill).success(function(response){
		console.log($response)
		})
		/*this.getlist = function(){
			return $http({method:"GET",url:'bill/get',params:{}});
		}*/
		
		//无参数时用$resource
//		self.sampleList = function(){
//	      return $resource("sample/getSamplingList?v="+new Date()).query();
//	    }

	});
	
//	celloudApp.service("samplingService", function($resource,$http){
	//  var self = this;
	//  self.sampleList = function(){
	//    return $resource("sample/getSamplingList?v="+new Date()).query();
	//  }
	//  self.getProductTags = function(){
	//    return $resource("uploadFile/getProductTag").query();
	//  }
	//  self.typeList = function(){
	//    return $resource("metadata/sampleType").query();
	//  }
	//  self.sampling = function(sampleName,tagId,type){
	//    return $http({
	//              method:"POST",
	//              url:'sample/sampling',
	//              headers: {'x-requested-with':null},
	//              params:{"sampleName":sampleName,"tagId":tagId,"type":type}
	//            });
	//  }
	
 module.exports = billService;