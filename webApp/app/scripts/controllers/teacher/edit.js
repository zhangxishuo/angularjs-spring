'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:TeacherEditCtrl
 * @description
 * # TeacherEditCtrl
 * Controller of the webApp
 */
angular.module('webApp')
    .controller('TeacherEditCtrl', function($scope, $state, $stateParams, teacher) {
        var self = this;
        var id   = $stateParams.id;

        self.init = function() {
            teacher.one(id, function(data) {
                $scope.data = data;
            });
        };

        self.submit = function() {
            teacher.update(id, $scope.data, function(data) {
                console.log('success', data);
                $state.go('teacher', {}, {reload: true});
            });
        };

        $scope.submit = self.submit;

        self.init();
    });
