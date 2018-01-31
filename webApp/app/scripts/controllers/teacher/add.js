'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:TeacherAddCtrl
 * @description
 * # TeacherAddCtrl
 * Controller of the webApp
 */
angular.module('webApp')
    .controller('TeacherAddCtrl', function($scope, $http, $state) {
        var self = this;

        self.init = function() {
            $scope.data = {
                name: '',
                username: '',
                email: '',
                sex: true
            }
        };

        self.submit = function() {
            var url = '/Teacher/';
            $http.post(url, $scope.data)
                .then(function success(response) {
                    console.log('success', response);
                    $state.go('teacher', {}, { reload: true });
                }, function error() {
                    console.log('error' + url);
                });
        };

        $scope.submit = self.submit;

        self.init();
    });
