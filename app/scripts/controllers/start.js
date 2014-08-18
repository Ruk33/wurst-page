'use strict';

angular.module('wurstApp')
       .controller('StartCtrl', ['$scope', 'DocumentationService', function($scope, DocumentationService) {
            $scope.elements = [];
       }]);