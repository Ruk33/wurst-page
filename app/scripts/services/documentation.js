'use strict';

angular.module('wurstApp')
       .service('DocumentationService', ['$resource', function($resource) {
            /**
             * 
             * @return {$resource}
             */
            this.all = function() {
                return $resource('documentation/packages.json');
            };

            /**
             * 
             * @param  {string} name
             * @return {$resource}
             */
            this.getPackage = function(name) {
                return $resource(
                    'documentation/:package.json',
                    {},
                    {
                        query: {
                            method: 'GET',
                            params: {
                                'package': name
                            }
                        }
                    }
                );
            };

            /**
             * 
             * @param  {string} packageName
             * @param  {string} className
             * @return {$resource}
             */
            this.getClass = function(packageName, className) {
                return $resource(
                    'documentation/:package/class/:name.json', 
                    {},
                    {
                        query: {
                            method: 'GET',
                            params: {
                                'package': packageName,
                                'name': className
                            }
                        }
                    }
                );
            };

            /**
             * 
             * @param  {string} packageName
             * @param  {string} className
             * @param  {string} methodName
             * @return {$resource}
             */
            this.getClassMethod = function(packageName, className, methodName) {
                return $resource(
                    'documentation/:package/class/:class/method/:method.json', 
                    {},
                    {
                        query: {
                            method: 'GET',
                            params: {
                                'package': packageName,
                                'class': className,
                                'method': methodName
                            }
                        }
                    }
                );
            };

            /**
             * 
             * @param  {string} packageName
             * @param  {string} className
             * @param  {string} propertyName
             * @return {$resource}
             */
            this.getClassProperty = function(packageName, className, propertyName) {
                return $resource(
                    'documentation/:package/class/:class/method/:property.json', 
                    {},
                    {
                        query: {
                            method: 'GET',
                            params: {
                                'package': packageName,
                                'class': className,
                                'property': propertyName
                            }
                        }
                    }
                );
            };

            /**
             * 
             * @param  {string} packageName
             * @param  {string} functionName
             * @return {$resource}
             */
            this.getFunction = function(packageName, functionName) {
                return $resource(
                    'documentation/:package/function/:name.json', 
                    {},
                    {
                        query: {
                            method: 'GET',
                            params: {
                                'package': packageName,
                                'name': functionName
                            }
                        }
                    }
                );
            };

            /**
             * 
             * @param  {string} packageName
             * @param  {string} globalName
             * @return {$resource}
             */
            this.getGlobal = function(packageName, globalName) {
                return $resource(
                    'documentation/:package/global/:name.json', 
                    {},
                    {
                        query: {
                            method: 'GET',
                            params: {
                                'package': packageName,
                                'name': globalName
                            }
                        }
                    }
                );
            };
       }]);