'use strict';

/**
 * 教师添加控制器
 * controller:TeacherAddCtrl
 * zhangxishuo
 */
angular.module('webApp')
    .controller('TeacherAddCtrl', function($scope, $state, teacher) {
        var self = this;

        self.init = function() {                                 // 初始化方法
            teacher.blank(function(data) {                       // 获取空教师
                $scope.data = data;                              // 传入视图
            });
        };

        self.submit = function() {                               // 提交方法
            teacher.save($scope.data, function(data) {           // 保存教师
                console.log('success', data);                    // 控制台打印
                $state.go('teacher', {}, { reload: true });      // 页面跳转
            });
        };

        $scope.submit = self.submit;                             // 传入视图

        self.init();                                             // 初始化
    });
