'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:TeacherViewCtrl
 * @description
 * # TeacherViewCtrl
 * Controller of the webApp
 */
angular.module('webApp')
    .controller('TeacherViewCtrl', function($scope, $stateParams, teacher) {
        var self = this;
        var id   = $stateParams.id;

        self.init = function() {
            teacher.one(id, function(data) {
                $scope.data = data;
            });
        };

        self.init();
    });
