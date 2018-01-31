'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:TeacherEditCtrl
 * @description
 * # TeacherEditCtrl
 * Controller of the webApp
 */
angular.module('webApp')
    .controller('TeacherEditCtrl', function($scope, $http, $state, $stateParams) {
        var self = this;
        var id = $stateParams.id;
        var url = '/Teacher/' + id;

        self.init = function() {
            $http.get(url)
                .then(function success(response) {
                    $scope.data = response.data;
                }, function error() {
                    console.log('error' + url);
                });
        };

        self.submit = function() {
            $http.put(url, $scope.data)
                .then(function success(response) {
                    console.log('success', response);
                    $state.go('teacher', {}, {reload: true});
                }, function error() {
                    console.log('error' + url);
                });
        };

        $scope.submit = self.submit;

        self.init();
    });
