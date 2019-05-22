'use strict';

/**
 * @ngdoc function
 * @name gregApp.controller:PhotoshootsCtrl
 * @description
 * # PhotoshootsCtrl
 * Controller of the gregApp
 */
angular.module('gregApp')
  .controller('PhotoshootsCtrl', function ($templateCache) {
    $templateCache.get('views/photoshoots.html');
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var Ctrl = this;
    Ctrl.photoshoots=[
      'Want to a try something different for a special occasion?',
      'Why not hire our horses to make your wedding day, proposal, anniversary, any day even more unique and unforgettable?',
      'Choose the horses you like and be ready for a beautiful photoshoot next to the view of the sea or mountain while watching the sunset.'
    ];
  });
