'use strict';

/**
 * @ngdoc service
 * @name webApp.teacher
 * @description
 * # teacher
 * Service in the webApp.
 */
angular.module('webApp')
    .service('teacher', function($http) {
        var self = this;

        self.getAllTeachers = function(callback) {
            var url = '/Teacher/';
            $http.get(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    console.log('error' + url);
                });
        };

        return {
            getAllTeachers: self.getAllTeachers
        };
    });
