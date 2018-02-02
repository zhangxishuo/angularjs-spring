'use strict';

/**
 * @ngdoc directive
 * @name webApp.directive:menu
 * @description
 * # menu
 */
angular.module('webApp')
    .directive('menu', function($state, routes) {
        return {
            templateUrl: 'views/directive/menu.html',
            restrict: 'E',
            link: function postLink($scope) {
                var self = this;

                self.isActive = function(state) {
                    var currentState = $state.$current;
                    if (currentState.parent) {
                        while (currentState.parent.parent !== null) {
                            currentState = currentState.parent;
                        }
                        if (currentState.name === state.name) {
                            return true;
                        } else {
                            return false;
                        }
                    }

                };

                $scope.isActive = self.isActive;
                $scope.routes = routes;
            }
        };
    });
