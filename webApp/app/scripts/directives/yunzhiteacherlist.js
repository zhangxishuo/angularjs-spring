'use strict';

/**
 * @ngdoc directive
 * @name webApp.directive:yunzhiTeacherList
 * @description
 * # yunzhiTeacherList
 */
angular.module('webApp')
    .directive('yunzhiTeacherList', function() {
        return {
            templateUrl: 'views/directive/yunzhiTeacherList.html',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {
                // element.text('this is the yunzhiTeacherList directive');
            }
        };
    });
