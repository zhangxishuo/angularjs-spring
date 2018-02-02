'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:TeacherIndexCtrl
 * @description
 * # TeacherIndexCtrl
 * Controller of the webApp
 */
angular.module('webApp')
    .controller('TeacherIndexCtrl', function($scope, $http) {
        var self = this;

        self.init = function() {
            var url = '/Teacher/';
            $http.get(url)
                .then(function success(response) {
                    $scope.list = response.data;
                }, function error() {
                    console.log('error' + url);
                });
        };

        self.delete = function(object) {
            var url = '/Teacher/' + object.id;
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
