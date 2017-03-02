(function() {	
	omsApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.otherwise('/');
	
	    $stateProvider
	        .state('index', {
	            url:'/',
	            cache:'false',
	            templateUrl: 'bill.html'
	        })
	        .state('bill', {
	            url:'/bill',
	            cache:'false',
	            templateUrl: 'bill.html',
	            controller: 'billController'
	        })
	        .state('sample', {
	            url:'/sample',
	            cache:'false',
	            templateUrl: 'sample.html',
	            controller: 'billController'
	        })
	
	}]);
	
}());