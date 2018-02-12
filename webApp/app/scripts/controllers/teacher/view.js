'use strict';

/**
 * 教师查看控制器
 * controller:TeacherViewCtrl
 * zhangxishuo
 */
angular.module('webApp')
    .controller('TeacherViewCtrl', function($scope, $stateParams, teacher) {
        var self = this;
        var id   = $stateParams.id;                              // 获取id

        self.init = function() {                                 // 初始化方法
            teacher.one(id, function(data) {                     // 获取教师
                $scope.data = data;                              // 传入视图
            });
        };

        self.init();                                             // 初始化
    });
