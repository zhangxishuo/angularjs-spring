'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:TeacherEditCtrl
 * @description
 * # TeacherEditCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('TeacherEditCtrl', function ($scope, $http, $stateParams, $state) {
    var self  = this;

    self.init = function () {
      self.getTeacher();                                      // 调用方法获取数据
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

    self.submit = function () {
      var id = $stateParams.id;                               // 获取id
      var url = 'http://127.0.0.1:8080/Teacher/' + id;        // 定义url
      $http.put(url, $scope.teacher)
        .then(function success (response) {
          console.log('success');
          $state.go('teacher', {}, {reload: true});           // 成功，跳转到首页，刷新
        }, function error (response) {
          console.log('error' + url);                         // 失败，打印控制台
        });
    };

    $scope.submit = self.submit;                              // 将submit赋值给$scope

    self.init();
  });
