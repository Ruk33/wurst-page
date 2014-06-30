'use strict';

/**
 * @ngdoc function
 * @name wurstApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wurstApp
 */
angular.module('wurstApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
