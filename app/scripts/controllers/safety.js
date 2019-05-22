'use strict';

/**
 * @ngdoc function
 * @name gregApp.controller:SafetyCtrl
 * @description
 * # SafetyCtrl
 * Controller of the gregApp
 */
angular.module('gregApp')
  .controller('SafetyCtrl', function ($templateCache) {
    $templateCache.get('views/about.html');
    var Ctrl = this;
    Ctrl.header1 = 'Your safety is my concern:';
    Ctrl.bulletPoints = [
      'Safety Helmets',
      'Modern up-to-date equipment',
      'Specialist child stirrups',
      'First aid kit carried',
      'Certified First Aider',
      'Rider ability assessment',
      'Treks matched to experince'
    ];
  });
