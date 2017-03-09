require('angular')
require('angular-resource')
require('angular-ui-router')
var billController = require('../body/bill/bill_service.js')
var billController = require('../body/bill/bill_crtl.js')
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
	            service:'billService',
	            controller: 'billController'
	        })
	        .state('bill', {
	            url:'/bill',
	            cache:'false',
	            template: bill,
	            controller: 'billController'
	        })
	        .state('sample', {
	            url:'/sample',
	            cache:'false',
	            template: sample,
	            controller: 'billController'
	        })
	         .state('query', {
	            url:'/query',
	            cache:'false',
	            template: query,
	            controller: 'billController'
	        })
	         .state('month', {
	            url:'/month',
	            cache:'false',
	            template: month,
	            controller: 'billController'
	        })
	         .state('month_app', {
	            url:'/month_app',
	            cache:'false',
	            template: month_app,
	            controller: 'billController'
	        })
	         .state('week', {
	            url:'/week',
	            cache:'false',
	            template: week,
	            controller: 'billController'
	        })
	         .state('week_app', {
	            url:'/week_app',
	            cache:'false',
	            template: week_app,
	            controller: 'billController'
	        })
	          .state('totle', {
	            url:'/totle',
	            cache:'false',
	            template: totle,
	            controller: 'billController'
	        })
	
	}]);

	
