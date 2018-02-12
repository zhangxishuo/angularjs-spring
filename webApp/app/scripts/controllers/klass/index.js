'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:KlassIndexCtrl
 * @description
 * # KlassIndexCtrl
 * Controller of the webApp
 */
angular.module('webApp')
    .controller('KlassIndexCtrl', function($scope, klass) {
        var self = this;

        self.init = function() {
            klass.all(function(data) {
                $scope.lists = data;
            });
        };

        self.delete = function(list) {
            klass.delete(list.id, function() {
                list._delete = true;
            });
        };

        $scope.delete = self.delete;

        self.init();
    });
