'use strict';

/**
 * @ngdoc function
 * @name gregApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the gregApp
 */
angular.module('gregApp')
  .controller('GalleryCtrl', function ($templateCache) {
    $templateCache.get('views/gallery.html');
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    // var Ctrl = this;
  });
