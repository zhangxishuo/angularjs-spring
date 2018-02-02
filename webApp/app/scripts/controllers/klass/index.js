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

        self.delete = function(object) {
            var url = '/Klass/' + object.id;
            $http.delete(url)
                .then(function success(response) {
                    console.log('success', response);
                    object._delete = true;
                }, function error() {
                    console.log('error' + url);
                });
        };

        $scope.delete = self.delete;

        self.init();
    });
