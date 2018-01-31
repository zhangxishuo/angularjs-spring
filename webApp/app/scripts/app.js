'use strict';

/**
 * @ngdoc overview
 * @name webApp
 * @description
 * # webApp
 *
 * Main module of the application.
 */
angular
    .module('webApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider, $provide, $httpProvider) {
        $stateProvider
            // 教师管理
            .state({
                name: 'teacher',
                url: '/teacher',
                controller: 'TeacherIndexCtrl',
                templateUrl: 'views/teacher/index.html'
            })
            .state({
                name: 'teacher.add',
                url: '/add',
                controller: 'TeacherAddCtrl',
                templateUrl: 'views/teacher/add.html'
            })
            .state({
                name: 'teacher.view',
                url: '/view/:id',
                controller: 'TeacherViewCtrl',
                templateUrl: 'views/teacher/view.html'
            })
            .state({
                name: 'teacher.edit',
                url: '/edit/:id',
                controller: 'TeacherEditCtrl',
                templateUrl: 'views/teacher/edit.html'
            })
            // 班级管理
            .state({
                name: 'klass',
                url: '/klass',
                controller: 'KlassIndexCtrl',
                templateUrl: 'views/klass/index.html'
            })
            .state({
                name: 'klass.add',
                url: '/add',
                controller: 'KlassAddCtrl',
                templateUrl: 'views/klass/add.html'
            });

        $urlRouterProvider
            .otherwise('/teacher');

        $provide.factory('urlInterceptor', function() {
            return {
                'request': function(config) {
                    var extension = config.url.split('.').pop();
                    if (extension !== 'html') {
                        config.url = 'http://127.0.0.1:8080' + config.url;
                    }
                    return config;
                },
            };
        });

        $httpProvider.interceptors.push('urlInterceptor');
    });
