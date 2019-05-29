'use strict';

/**
 * @ngdoc overview
 * @name gregApp
 * @description
 * # gregApp
 *
 * Main module of the application.
 */
angular
  .module('gregApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode({
      enabled: false,
      requireBase: true
    });
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'Ctrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'Ctrl'
      })
      .when('/horses', {
        templateUrl: 'views/horses.html',
        controller: 'HorsesCtrl',
        controllerAs: 'Ctrl'
      })
      .when('/treks', {
        templateUrl: 'views/treks.html',
        controller: 'TreksCtrl',
        controllerAs: 'Ctrl'
      })
      .when('/riding', {
        templateUrl: 'views/riding.html',
        controller: 'RidingCtrl',
        controllerAs: 'Ctrl'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl',
        controllerAs: 'Ctrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'Ctrl'
      })
      .when('/lessons', {
        templateUrl: 'views/lessons.html',
        controller: 'LessonsCtrl',
        controllerAs: 'Ctrl'
      })
      .when('/photoshoots', {
        templateUrl: 'views/photoshoots.html',
        controller: 'PhotoshootsCtrl',
        controllerAs: 'Ctrl'
      })
      .when('/picnics', {
        templateUrl: 'views/picnics.html',
        controller: 'PicnicsCtrl',
        controllerAs: 'Ctrl'
      })
      .when('/safety', {
        templateUrl: 'views/safety.html',
        controller: 'SafetyCtrl',
        controllerAs: 'Ctrl'
      })
      .otherwise('/');
  });
