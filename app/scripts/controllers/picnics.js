'use strict';

/**
 * @ngdoc function
 * @name gregApp.controller:PicnicsCtrl
 * @description
 * # PicnicsCtrl
 * Controller of the gregApp
 */
angular.module('gregApp')
  .controller('PicnicsCtrl', function ($templateCache) {
    $templateCache.get('views/picnics.html');
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var Ctrl = this;
    Ctrl.picnics=[
      ' Pony riding parties',
      'Are you looking for a beautiful area with plenty of space for a children\'s party with the extra excitement of horse riding too?',
      'Contact us for more details.'
    ];
  });
