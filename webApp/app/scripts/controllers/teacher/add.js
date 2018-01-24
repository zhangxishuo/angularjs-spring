'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:TeacherAddCtrl
 * @description
 * # TeacherAddCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('TeacherAddCtrl', function ($scope, $http, $state) {
    var self  = this;

    self.init = function () {
      $scope.teacher = {                                    // 初始化一个空的teacher
        name: '',
        username: '',
        email: '',
        sex: true
      };
    };

    self.submit = function () {
      var url   = 'http://127.0.0.1:8080/Teacher/';         // 定义url
      $http.post(url, $scope.teacher)                       // 发起post请求，并传入该教师
        .then(function success (response) {
          console.log('success');
          console.log(response);
          $state.go('teacher', {}, {reload: true});         // 成功，跳转到首页，并刷新
        }, function error (response) {
          console.log('error' + url);
          console.log(response);                            // 失败，打印错误信息
        });
    };

    $scope.submit = self.submit;                            // 将submit赋值给$scope

    self.init();
  });
