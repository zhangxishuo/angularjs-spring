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
         */
        self.all = function(callback) {
            $http.get(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    console.log('error' + url);
                });
        };

        /**
         * 根据id获取相应教师
         */
        self.one = function(id, callback) {
            $http.get(url + id)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    console.log('error' + url);
                });
        };

        /**
         * 保存教师
         */
        self.save = function(data, callback) {
            $http.post(url, data)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    console.log('error' + url);
                });
        };

        /**
         * 更新教师
         */
        self.update = function(id, data, callback) {
            $http.put(url + id, data)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    console.log('error' + url);
                });
        };

        /**
         * 根据id删除教师
         */
        self.delete = function(id, callback) {
            $http.delete(url + id)
                .then(function success() {
                    if (callback) {
                        callback();
                    }
                }, function error() {
                    console.log('error' + url);
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
