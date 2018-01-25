'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:TeacherViewCtrl
 * @description
 * # TeacherViewCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('TeacherViewCtrl', function ($scope, $http, $stateParams) {
    var self  = this;

    self.init = function () {
      self.getTeacher();                                         // 调用方法获取数据
    };

    self.getTeacher = function () {
      var id  = $stateParams.id;                              // 获取id
      var url = 'http://127.0.0.1:8080/Teacher/' + id;        // 定义url
      $http.get(url)
        .then(function success (response) {
          console.log('success');
          console.log(response);
          $scope.teacher = response.data;                     // 成功, 将数据赋值给$scope
        }, function error (response) {
          console.log('error' + url);
          console.log(response);                              // 失败, 打印控制台
        });
    };

    self.init();
  });
