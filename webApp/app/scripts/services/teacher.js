'use strict';

/**
 * 
 * 
 */
angular.module('webApp')
    .service('teacher', function($http) {
        var self = this;
        var url  = '/Teacher/';

        self.blank = function(callback) {
            var data = {
                name: '',
                username: '',
                email: '',
                sex: true
            };
            if (callback) {
                callback(data);
            }
        };

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
