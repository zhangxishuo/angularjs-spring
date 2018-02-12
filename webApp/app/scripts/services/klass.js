'use strict';

/**
 * @ngdoc service
 * @name webApp.klass
 * @description
 * # klass
 * Service in the webApp.
 */
angular.module('webApp')
    .service('klass', function($http) {
        var self = this;
        var url  = '/Klass/';                                    // 定义url

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
            all    : self.all,
            one    : self.one,
            save   : self.save,
            update : self.update,
            delete : self.delete
        };
    });
