'use strict';

/**
 * @ngdoc directive
 * @name webApp.directive:yunzhiTeacherList
 * @description
 * # yunzhiTeacherList
 */
angular.module('webApp')
    .directive('yunzhiTeacherList', function(teacher) {
        return {
            templateUrl: 'views/directive/yunzhiTeacherList.html',
            restrict: 'E',
            link: function postLink($scope) {
                teacher.getAllTeachers(function(teachers) {
                    $scope.teachers = teachers;
                });
            }
        };
    });
