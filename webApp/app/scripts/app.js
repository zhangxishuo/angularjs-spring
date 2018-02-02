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
    .config(function($provide) {
        $provide.constant('routes', [{
            name: 'teacher',
            url: '/teacher',
            controller: 'TeacherIndexCtrl',
            templateUrl: 'views/teacher/index.html',
            data: {
                title: '教师管理',
                show: true
            }
        }, {
            name: 'teacher.add',
            url: '/add',
            controller: 'TeacherAddCtrl',
            templateUrl: 'views/teacher/add.html',
            data: {
                title: '增加',
                show: false
            }
        }, {
            name: 'teacher.view',
            url: '/view/:id',
            controller: 'TeacherViewCtrl',
            templateUrl: 'views/teacher/view.html',
            data: {
                title: '查看',
                show: false
            }
        }, {
            name: 'teacher.edit',
            url: '/edit/:id',
            controller: 'TeacherEditCtrl',
            templateUrl: 'views/teacher/edit.html',
            data: {
                title: '编辑',
                show: false
            }
        }, {
            name: 'klass',
            url: '/klass',
            controller: 'KlassIndexCtrl',
            templateUrl: 'views/klass/index.html',
            data: {
                title: '班级管理',
                show: true
            }
        }, {
            name: 'klass.add',
            url: '/add',
            controller: 'KlassAddCtrl',
            templateUrl: 'views/klass/add.html',
            data: {
                title: '新增',
                show: false
            }
        }, {
            name: 'klass.view',
            url: '/view/:id',
            controller: 'KlassViewCtrl',
            templateUrl: 'views/klass/view.html',
            data: {
                title: '查看',
                show: false
            }
        }, {
            name: 'klass.edit',
            url: '/edit/:id',
            controller: 'KlassEditCtrl',
            templateUrl: 'views/klass/edit.html',
            data: {
                title: '编辑',
                show: false
            }
        }]);
    })
    .config(function($stateProvider, $urlRouterProvider, $provide, $httpProvider, routes) {
        angular.forEach(routes, function(value) {
            $stateProvider
                .state(value);
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
