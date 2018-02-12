'use strict';

/**
 * 教师主控制器
 * controller:TeacherIndexCtrl
 * zhangxishuo
 */
angular.module('webApp')
    .controller('TeacherIndexCtrl', function($scope, teacher) {
        var self = this;

        self.init = function() {
            teacher.all(function(data) {
                $scope.lists = data;                             // 传入视图
            });
        };

        self.delete = function(list) {
            teacher.delete(list.id, function() {
                list._delete = true;                             // 已删除设置为true，隐藏该项
            });
        };

        $scope.delete = self.delete;                             // 传入视图

        self.init();                                             // 初始化
    });
