'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:TeacherIndexCtrl
 * @description
 * # TeacherIndexCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('TeacherIndexCtrl', function ($scope, $http) {
    var self = this;

    self.init = function () {
      var url = 'http://127.0.0.1:8080/Teacher/';                // 定义url
      $http.get(url)                                             // 发起get请求
        .then(function success (response) {
          console.log('success');
          console.log(response);
          $scope.list = response.data;                           // 成功，将请求到的数据赋给$scope
        }, function error (response) {
          console.log('error' + response);                       // 失败，打印错误信息
        });
    };

    self.init();
  });
