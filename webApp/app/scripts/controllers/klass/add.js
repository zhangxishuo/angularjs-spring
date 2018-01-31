'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:KlassAddCtrl
 * @description
 * # KlassAddCtrl
 * Controller of the webApp
 */
angular.module('webApp')
    .controller('KlassAddCtrl', function($scope, $http, $state) {
        var self = this;

        self.init = function() {
            self.getAllTeachers();
        };

        self.getAllTeachers = function() {
            var url = '/Teacher/';
            $http.get(url)
                .then(function success(response) {
                    $scope.teachers = response.data;
                }, function error() {
                    console.log('error' + url);
                });
        }

        self.submit = function() {
            var url = '/Klass/';
            $http.post(url, $scope.data)
                .then(function success(response) {
                    console.log('success', response);
                    $state.go('klass', {}, { reload: true });
                }, function error() {
                    console.log('error' + url);
                });
        };

        $scope.submit = self.submit;

        self.init();
    });
