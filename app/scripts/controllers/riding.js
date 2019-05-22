'use strict';

/**
 * @ngdoc function
 * @name gregApp.controller:TreksCtrl
 * @description
 * # TreksCtrl
 * Controller of the gregApp
 */
angular.module('gregApp')
    .controller('RidingCtrl', function ($templateCache) {
        $templateCache.get('views/riding.html');
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var Ctrl = this;
    Ctrl.riding=[
        'Choose a private lesson or come with friends (up to 3-4 riders). Lessons are arranged with an appointment.',
        'Call or send us an email!'
    ];
    });
