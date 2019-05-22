'use strict';

/**
 * @ngdoc directive
 * @name gregApp.directive:modal
 * @description
 * # modal
 */
angular.module('gregApp')
  .directive('modal', function () {
    return {
      scope: {},
      bindToController: {},
      restrict: 'E',
      templateUrl: 'views/modal.html',
      replace: true,
      controllerAs: 'Ctrl',
      controller: function ($templateCache,$rootScope) {
        $templateCache.get('views/modal.html');
        var Ctrl = this;
        Ctrl.left = '<';
        Ctrl.right = '>';
        Ctrl.index = 0;
        Ctrl.prev = function(){
          Ctrl.index = window.Math.max(0, Ctrl.index-1);
        };
        Ctrl.next = function(){
          Ctrl.index = window.Math.min(Ctrl.index+1,Ctrl.group.length-1);
        };
        $rootScope.$on('$showModal',function(ev,data){
          if(ev){
            Ctrl.index = 0;
            Ctrl.group = data;
            
          }
      });
      }
    };
  });
