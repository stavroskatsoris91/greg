'use strict';

/**
 * @ngdoc function
 * @name gregApp.controller:Thankyou
 * @description
 * # Thankyou
 * Controller of the gregApp
 */
angular.module('gregApp')
  .controller('ThankyouCtrl', function ($templateCache) {
    $templateCache.get('views/about.html');
    var Ctrl = this;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    Ctrl.thankyou = {
      title:'Thank you!',
      text:[
        'We will be in contact with you shortly 😊'
        ]
    };
  });