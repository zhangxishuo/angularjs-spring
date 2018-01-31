'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:TeacherViewCtrl
 * @description
 * # TeacherViewCtrl
 * Controller of the webApp
 */
angular.module('webApp')
    .controller('TeacherViewCtrl', function($scope, $http, $stateParams) {
        var self = this;

        self.init = function() {
            var id = $stateParams.id;
            var url = '/Teacher/' + id;
            $http.get(url)
                .then(function success(response) {
                    $scope.data = response.data;
                }, function error() {
                    console.log('error' + url);
                });
        };

        self.init();
    });
