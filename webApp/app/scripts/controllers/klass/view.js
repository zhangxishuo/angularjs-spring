'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:KlassViewCtrl
 * @description
 * # KlassViewCtrl
 * Controller of the webApp
 */
angular.module('webApp')
    .controller('KlassViewCtrl', function($scope, $stateParams, klass) {
        var self = this;
        var id   = $stateParams.id;

        self.init = function() {
            klass.one(id, function(data) {
                $scope.data = data;
            });
        };

        self.init();
    });
