'use strict';

/**
 * @ngdoc directive
 * @name gregApp.directive:clickOutside
 * @description
 * # clickOutside
 */
angular.module('gregApp')
  .directive('clickOutside', ['$document',function ($document) {
    return {
        link: function postLink(scope, element, attrs) {
          var bound = false;
          var onClick = function (event) {
            var isChild = element[0].contains(event.target);
            var isSelf = element[0] == event.target;
            var isInside = isChild || isSelf;
            if (!isInside) {
              scope.$applyAsync(attrs.clickOutside);
            }
          }
          $document.bind('click touchstart', onClick);
          bound = true;
          scope.$on('$routeChangeSuccess', function(next, current) {
            $document.unbind('click touchstart', onClick);
            $document.bind('click touchstart', onClick);
          });
          scope.$on('$destroy',function(){
            $document.unbind('click touchstart', onClick);
          })
        }
      };
  }]);