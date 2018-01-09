'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:TeacherAddCtrl
 * @description
 * # TeacherAddCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('TeacherAddCtrl', function ($scope) {
    var self = this;

    self.init = function () {
      $scope.teacher = {
        name: '',
        username: '',
        email: '',
        sex: true
      };
    };

    self.init();
  });
