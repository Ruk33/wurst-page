'use strict';

angular.module('wurstApp').service(
    'DocumentationService', 
    [
        '$resource', 
        function($resource) {
            /**
             * 
             * @return {$resource}
             */
            this.all = function() {
                return $resource('documentation/packages.json').query();
            };

            /**
             * 
             * @param  {string} packageName
             * @return {$resource}
             */
            this.getPackage = function(packageName) {
                var params = {'package': packageName};
                return $resource('documentation/:package.json', params).get();
            };

            /**
             * 
             * @param  {string} packageName
             * @param  {string} className
             * @return {$resource}
             */
            this.getClass = function(packageName, className) {
                var url = 'documentation/:package/class/:class.json';
                var params = {'package': packageName, 'class': className};

                return $resource(url, params).get();
            };

            /**
             * 
             * @param  {string} packageName
             * @param  {string} className
             * @param  {string} methodName
             * @return {$resource}
             */
            this.getClassMethod = function(packageName, className, methodName) {
                var url = 'documentation/:package/class/:class/method/:method.json';
                var params = {
                    'package': packageName,
                    'class': className,
                    'method': methodName
                };

                return $resource(url, params).get();
            };

            /**
             * 
             * @param  {string} packageName
             * @param  {string} className
             * @param  {string} propertyName
             * @return {$resource}
             */
            this.getClassProperty = function(packageName, className, propertyName) {
                var url = 'documentation/:package/class/:class/method/:property.json';
                var params = {
                    'package': packageName,
                    'class': className,
                    'property': propertyName
                };

                return $resource(url, params).get();
            };

            /**
             * 
             * @param  {string} packageName
             * @param  {string} functionName
             * @return {$resource}
             */
            this.getFunction = function(packageName, functionName) {
                var url = 'documentation/:package/function/:name.json';
                var params = {'package': packageName, 'name': functionName};

                return $resource(url, params).get();
            };

            /**
             * 
             * @param  {string} packageName
             * @param  {string} globalName
             * @return {$resource}
             */
            this.getGlobal = function(packageName, globalName) {
                var url = 'documentation/:package/global/:name.json';
                var params = {'package': packageName, 'name': globalName};

                return $resource(url, params).get();
            };
       }
    ]
);