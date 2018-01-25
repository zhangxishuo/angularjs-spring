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
      // 教师管理
      .state({
        name: 'teacher',                                    // 教师首页
        url: '/teacher',                                    // url
        controller: 'TeacherIndexCtrl',                     // 控制器名称
        templateUrl: 'views/teacher/index.html'             // V层地址
      })
      .state({
        name: 'teacher.add',                                // 教师添加
        url: '/add',                                        // url
        controller: 'TeacherAddCtrl',                       // 控制器名称
        templateUrl: 'views/teacher/add.html'               // V层地址
      })
      .state({
        name: 'teacher.view',                               // 教师查看
        url: '/view/:id',                                   // url, 带参数
        controller: 'TeacherViewCtrl',                      // 控制器名称
        templateUrl: 'views/teacher/view.html'              // V层地址
      })
      .state({
        name: 'teacher.edit',                               // 教师编辑
        url: '/edit/:id',                                   // url, 带参数
        controller: 'TeacherEditCtrl',                      // 控制器名称
        templateUrl: 'views/teacher/edit.html'              // V层地址
      })
      // 班级管理 
      .state({
        name: 'klass',                                      // 班级首页
        url: '/klass',                                      // url, 带参数
        controller: 'KlassIndexCtrl',                       // 控制器名称
        templateUrl: 'views/klass/index.html'               // V层地址
      })
      .state({
        name: 'klass.add',                                  // 班级首页
        url: '/add',                                        // url, 带参数
        controller: 'KlassAddCtrl',                         // 控制器名称
        templateUrl: 'views/klass/add.html'                 // V层地址
      });
    $urlRouterProvider
      .otherwise('/teacher');
  });
