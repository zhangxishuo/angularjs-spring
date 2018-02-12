'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:TeacherIndexCtrl
 * @description
 * # TeacherIndexCtrl
 * Controller of the webApp
 */
angular.module('webApp')
    .controller('TeacherIndexCtrl', function($scope, teacher) {
        var self = this;

        self.init = function() {
            teacher.all(function(data) {
                $scope.lists = data;
            });
        };

        self.delete = function(list) {
            teacher.delete(list.id, function() {
                list._delete = true;
            });
        };

        $scope.delete = self.delete;

        self.init();
    });
