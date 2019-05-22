'use strict';

/**
 * @ngdoc function
 * @name gregApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the gregApp
 */
angular.module('gregApp')
  .controller('ContactCtrl', function ($templateCache) {
    $templateCache.get('views/contact.html');
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
