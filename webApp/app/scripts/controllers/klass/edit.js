'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:KlassEditCtrl
 * @description
 * # KlassEditCtrl
 * Controller of the webApp
 */
angular.module('webApp')
    .controller('KlassEditCtrl', function($scope, $state, $stateParams, klass) {
        var self = this;
        var id   = $stateParams.id;

        self.init = function() {
            klass.one(id, function(data) {
                $scope.data = data;
            });
        };

        self.submit = function() {
            klass.update(id, $scope.data, function(data) {
                console.log('success', data);
                $state.go('klass', {}, { reload: true });
            });
        };

        $scope.submit = self.submit;

        self.init();
    });
