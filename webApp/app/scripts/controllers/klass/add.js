'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:KlassAddCtrl
 * @description
 * # KlassAddCtrl
 * Controller of the webApp
 */
angular.module('webApp')
    .controller('KlassAddCtrl', function($scope, $state, klass) {
        var self = this;

        self.init = function() {
            
        };

        self.submit = function() {
            klass.save($scope.data, function(data) {
                console.log('success', data);
                $state.go('klass', {}, { reload: true });
            });
        };

        $scope.submit = self.submit;

        self.init();
    });
