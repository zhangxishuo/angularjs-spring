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
  .config(function ($stateProvider) {
    $stateProvider
      .state({
        name: 'teacher',
        url: '/teacher',
        controller: 'TeacherIndexCtrl',
        templateUrl: 'views/teacher/index.html'
      });
  });
