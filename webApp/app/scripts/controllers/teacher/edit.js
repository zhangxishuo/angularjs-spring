'use strict';

/**
 * 教师编辑控制器
 * controller:TeacherEditCtrl
 * zhangxishuo
 */
angular.module('webApp')
    .controller('TeacherEditCtrl', function($scope, $state, $stateParams, teacher) {
        var self = this;
        var id   = $stateParams.id;                              // 获取id

        self.init = function() {                                 // 初始化方法
            teacher.one(id, function(data) {                     // 获取教师
                $scope.data = data;                              // 传入视图
            });
        };

        self.submit = function() {                               // 提交方法
            teacher.update(id, $scope.data, function(data) {     // 调用更新方法
                console.log('success', data);                    // 控制台打印
                $state.go('teacher', {}, {reload: true});        // 页面跳转
            });
        };

        $scope.submit = self.submit;                             // 传入视图

        self.init();                                             // 初始化
    });
