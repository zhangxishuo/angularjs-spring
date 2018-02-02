'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:KlassEditCtrl
 * @description
 * # KlassEditCtrl
 * Controller of the webApp
 */
angular.module('webApp')
    .controller('KlassEditCtrl', function($scope, $http, $state, $stateParams) {
        var self = this;

        self.init = function() {
            self.getAllTeachers();
            var url = '/Klass/' + $stateParams.id;
            $http.get(url)
                .then(function success(response) {
                    $scope.data = response.data;
                }, function error() {
                    console.log('error' + url);
                });
        };

        self.getAllTeachers = function() {
            var url = '/Teacher/';
            $http.get(url)
                .then(function success(response) {
                    $scope.teachers = response.data;
                }, function error() {
                    console.log('error' + url);
                });
        };

        self.submit = function() {
            var url = '/Klass/' + $stateParams.id;
            $http.put(url, $scope.data)
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
