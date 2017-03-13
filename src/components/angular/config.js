require('angular')
require('angular-resource')
require('angular-ui-router')
var omsApp = require('./application.js');
var BillController = require('./bill_service.js')
var BillController = require('./bill_crtl.js')
var bill = require('../body/bill/bill.html')
//var bill_crtl = require('../body/bill/')
var sample = require('../body/sample/sample.html')
var query = require('../body/report_query/query.html')
var month = require('../body/operation/month.html')
var month_app = require('../body/operation/month_app.html')
var week = require('../body/operation/week.html')
var week_app = require('../body/operation/week_app.html')
var totle = require('../body/operation/totle.html')

	omsApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
		//$qProvider.errorOnUnhandledRejections(false);
	    $urlRouterProvider.otherwise('/');
	
	    $stateProvider
	        .state('index', {
	            url:'/',
	            cache:'false',
	            template: bill,
	            //service:'BillController',
	            controller: 'BillController'
	        })
	        .state('bill', {
	            url:'/bill',
	            cache:'false',
	            template: bill,
	            controller: 'BillController'
	        })
	        .state('sample', {
	            url:'/sample',
	            cache:'false',
	            template: sample,
	            controller: 'BillController'
	        })
	         .state('query', {
	            url:'/query',
	            cache:'false',
	            template: query,
	            controller: 'BillController'
	        })
	         .state('month', {
	            url:'/month',
	            cache:'false',
	            template: month,
	            controller: 'BillController'
	        })
	         .state('month_app', {
	            url:'/month_app',
	            cache:'false',
	            template: month_app,
	            controller: 'BillController'
	        })
	         .state('week', {
	            url:'/week',
	            cache:'false',
	            template: week,
	            controller: 'BillController'
	        })
	         .state('week_app', {
	            url:'/week_app',
	            cache:'false',
	            template: week_app,
	            controller: 'BillController'
	        })
	          .state('totle', {
	            url:'/totle',
	            cache:'false',
	            template: totle,
	            controller: 'BillController'
	        })
	
	}]);

	
