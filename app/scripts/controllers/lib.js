'use strict';

angular.module('wurstApp').controller(
    'LibCtrl', 
    [
        '$scope',
        'DocumentationService',
        function($scope, DocumentationService) {
            $scope.packages = DocumentationService.all();
            console.log($scope.packages);
        }
    ]
);