'use strict';

/**
 * @ngdoc function
 * @name gregApp.controller:LessonsCtrl
 * @description
 * # LessonsCtrl
 * Controller of the gregApp
 */
angular.module('gregApp')
  .controller('LessonsCtrl', function ($templateCache,$rootScope) {
    $templateCache.get('views/lessons.html');
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var Ctrl = this;
    Ctrl.lessons=[
        'Choose a private lesson or come with friends (up to 3-4 riders). Or just try a little ride in our outdoors arena next to the sea view for only 12 euros!',
        'Lessons are arranged by appointment.',
        'Call or send us an email!'
    ];
    Ctrl.lessonsPhotos = [
      {
        image:'/images/lessons/lesson-1.jpg',
        description:'Fun grooming Robbie before the lesson'},
      {
        image:'/images/lessons/lesson-2.jpg',
        description:'Trotting on Robbie'},
      {
        image:'/images/lessons/lesson-3.jpg',
        description:'First steps learning to trot on Rebecca'},
      {
        image:'/images/lessons/lesson-4.jpg',
        description:'Our students dropping in to say hello to the horses'}
    ];
    Ctrl.showModal = function (pos) {
      var list = Ctrl.lessonsPhotos.map(function (x) {
        return { img: x.image };
      });
      $rootScope.$broadcast('showModal', list,pos);
    };
  });
