'use strict';

/**
 * @ngdoc directive
 * @name webApp.directive:yunzhiMenu
 * @description
 * # yunzhiMenu
 */
angular.module('webApp')
    .directive('yunzhiMenu', function($state, routes) {
        return {
            templateUrl: 'views/directive/yunzhiMenu.html',
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
