'use strict';

/**
 * @ngdoc function
 * @name gregApp.controller:PicnicsCtrl
 * @description
 * # PicnicsCtrl
 * Controller of the gregApp
 */
angular.module('gregApp')
  .controller('PicnicsCtrl', function ($templateCache,$rootScope) {
    $templateCache.get('views/picnics.html');
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var Ctrl = this;
    Ctrl.picnics=[
      'Are you looking for a beautiful area with plenty of space for a children\'s party with the extra excitement of horse riding too?',
      'Or organize a different picnic for you and your friends or family?',
      ' Contact us for more details.'
    ];
    Ctrl.photos = ['/images/picnics/picnic-1.jpg'];
    Ctrl.showModal = function (pos) {
      var list = Ctrl.photos.map(function (x) {
        return { img: x };
      });
      $rootScope.$broadcast('showModal', list,pos);
    };
  });
