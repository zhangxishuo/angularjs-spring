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
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state({
        name: 'teacher',                                    // 名称
        url: '/teacher',                                    // url
        controller: 'TeacherIndexCtrl',                     // 控制器名称
        templateUrl: 'views/teacher/index.html'             // V层地址
      })
      .state({
        name: 'teacher.add',                                // 名称
        url: '/add',                                        // url
        controller: 'TeacherAddCtrl',                       // 控制器名称
        templateUrl: 'views/teacher/add.html'               // V层地址
      })
      .state({
        name: 'teacher.edit',                               // 名称
        url: '/edit/:id',                                   // url, 带参数
        controller: 'TeacherEditCtrl',                      // 控制器名称
        templateUrl: 'views/teacher/edit.html'              // V层地址
      });
    $urlRouterProvider
      .otherwise('/teacher');
  });
