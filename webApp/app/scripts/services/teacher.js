'use strict';

/**
 * 教师服务
 * service:teacher
 * zhangxishuo
 */
angular.module('webApp')
    .service('teacher', function($http) {
        var self = this;
        var url  = '/Teacher/';                                  // 定义url

        /**
         * 获取空教师
         * zhangxishuo
         */
        self.blank = function(callback) {
            var data = {                                         // 定义空对象
                name: '',
                username: '',
                email: '',
                sex: true
            };
            if (callback) {
                callback(data);
            }
        };

        /**
         * 获取所有教师
         * zhangxishuo
         */
        self.all = function(callback) {
            $http.get(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    console.log('error');
                });
        };

        /**
         * 根据id获取相应教师
         * zhangxishuo
         */
        self.one = function(id, callback) {
            $http.get(url + id)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    console.log('error');
                });
        };

        /**
         * 保存教师
         * zhangxishuo
         */
        self.save = function(data, callback) {
            $http.post(url, data)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    console.log('error');
                });
        };

        /**
         * 更新教师
         * zhangxishuo
         */
        self.update = function(id, data, callback) {
            $http.put(url + id, data)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    console.log('error');
                });
        };

        /**
         * 根据id删除教师
         * zhangxishuo
         */
        self.delete = function(id, callback) {
            $http.delete(url + id)
                .then(function success() {
                    if (callback) {
                        callback();
                    }
                }, function error() {
                    console.log('error');
                });
        };

        return {
            blank  : self.blank,
            all    : self.all,
            one    : self.one,
            save   : self.save,
            update : self.update,
            delete : self.delete
        };
    });
