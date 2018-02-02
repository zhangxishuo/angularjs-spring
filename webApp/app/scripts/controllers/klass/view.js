'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:KlassViewCtrl
 * @description
 * # KlassViewCtrl
 * Controller of the webApp
 */
angular.module('webApp')
    .controller('KlassViewCtrl', function($scope, $http, $stateParams) {
        var self = this;

        self.init = function() {
            var url = '/Klass/' + $stateParams.id;
            $http.get(url)
                .then(function success(response) {
                    $scope.data = response.data;
                }, function error() {
                    console.log('error' + url);
                });
        };

        self.init();
    });
