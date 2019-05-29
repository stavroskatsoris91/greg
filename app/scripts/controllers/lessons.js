'use strict';

/**
 * @ngdoc function
 * @name gregApp.controller:LessonsCtrl
 * @description
 * # LessonsCtrl
 * Controller of the gregApp
 */
angular.module('gregApp')
  .controller('LessonsCtrl', function ($templateCache) {
    $templateCache.get('views/lessons.html');
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var Ctrl = this;
    Ctrl.lessons=[
        'Choose a private lesson or come with friends (up to 3-4 riders). Or just try a little ride in our outdoors arena next to the sea view for only 12 euros!',
        'Lessons are arranged with an appointment.',
        'Call or send us an email!'
    ];
  });
