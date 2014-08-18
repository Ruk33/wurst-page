'use strict';

/**
 * @ngdoc overview
 * @name wurstApp
 * @description
 * # wurstApp
 *
 * Main module of the application.
 */
angular
		.module('wurstApp', [
			'ngAnimate',
			'ngCookies',
			'ngResource',
			'ngRoute',
			'ngSanitize',
			'ngTouch'
		])
		.config(function($routeProvider) {
			$routeProvider
					.when('/', {
						templateUrl: 'views/main.html',
						controller: 'MainCtrl'
					})
					.when('/start', {
						templateUrl: 'views/start.html',
						controller: 'StartCtrl'
					})
					.when('/about', {
						templateUrl: 'views/about.html',
						controller: 'AboutCtrl'
					})
					.otherwise({
						redirectTo: '/'
					});
		});
