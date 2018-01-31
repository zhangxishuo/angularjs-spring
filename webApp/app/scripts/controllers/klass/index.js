'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:KlassIndexCtrl
 * @description
 * # KlassIndexCtrl
 * Controller of the webApp
 */
angular.module('webApp')
    .controller('KlassIndexCtrl', function($scope, $http) {
        var self = this;

        self.init = function() {
            var url = '/Klass/';
            $http.get(url)
                .then(function success(response) {
                    $scope.list = response.data;
                }, function error() {
                    console.log('error' + url);
                });
        };

        self.init();
    });
