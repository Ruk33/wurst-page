'use strict';

/**
 * @ngdoc function
 * @name wurstApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wurstApp
 */
angular.module('wurstApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
