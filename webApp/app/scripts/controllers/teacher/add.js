'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:TeacherAddCtrl
 * @description
 * # TeacherAddCtrl
 * Controller of the webApp
 */
angular.module('webApp')
    .controller('TeacherAddCtrl', function($scope, $state, teacher) {
        var self = this;

        self.init = function() {
            teacher.blank(function(data) {
                $scope.data = data;
            });
        };

        self.submit = function() {
            teacher.save($scope.data, function(data) {
                console.log('success', data);
                $state.go('teacher', {}, { reload: true });
            });
        };

        $scope.submit = self.submit;

        self.init();
    });
