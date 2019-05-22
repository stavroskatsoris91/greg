'use strict';

/**
 * @ngdoc directive
 * @name gregApp.directive:footer
 * @description
 * # footer
 */
angular.module('gregApp')
  .directive('footer', function () {
    return {
      scope: {},
      bindToController: {},
      restrict: 'E',
      templateUrl: 'views/footer.html',
      replace: true,
      controllerAs: 'Ctrl',
      controller: function ($templateCache) {
          $templateCache.get('views/footer.html');
          var Ctrl = this;
          Ctrl.title = 'Where to Find Us';
          Ctrl.location = 'Spetses, 180 50';
      }
  };
  });
