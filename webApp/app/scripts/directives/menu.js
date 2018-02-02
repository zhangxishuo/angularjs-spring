'use strict';

/**
 * @ngdoc directive
 * @name webApp.directive:menu
 * @description
 * # menu
 */
angular.module('webApp')
    .directive('menu', function($state) {
        return {
            templateUrl: 'views/directive/menu.html',
            restrict: 'E',
            link: function postLink($scope) {
                var self = this;

                self.isActive = function(name) {
                    if ($state.current.name === name) {
                        return true;
                    } else {
                        return false;
                    }
                };

                $scope.isActive = self.isActive;
            }
        };
    });
