'use strict';

/**
 * 教师主控制器
 * controller:TeacherIndexCtrl
 * zhangxishuo
 */
angular.module('webApp')
    .controller('TeacherIndexCtrl', function($scope, teacher) {
        var self = this;

        self.init = function() {                                 // 初始化方法
            teacher.all(function(data) {                         // 获取所有教师
                $scope.lists = data;                             // 传入视图
            });
        };

        self.delete = function(list) {                           // 删除方法
            teacher.delete(list.id, function() {                 // 调用删除方法
                list._delete = true;                             // 已删除设置为true，隐藏该项
            });
        };

        $scope.delete = self.delete;                             // 传入视图

        self.init();                                             // 初始化
    });
