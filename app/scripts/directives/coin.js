'use strict';

/**
 * @ngdoc directive
 * @name gregApp.directive:coin
 * @description
 * # coin
 */
angular.module('gregApp')
  .directive('coin', function () {
    return {
      scope: {},
      bindToController: { list: '=' },
      restrict: 'E',
      templateUrl: 'views/coin.html',
      replace: true,
      controllerAs: 'Ctrl',
      controller: function ($templateCache,$interval,$scope,$rootScope,$element,$timeout) {
        $templateCache.get('views/coin.html');
          this.$onInit = function () {
            var Ctrl = this;
            var sides = Ctrl.list.slice(0, 2);
            var count = 0;
            function updateSides() {
              var l = Ctrl.list.length;
              var rem = (count+1) % l;
              if(count%2===1){
                sides[0]=Ctrl.list[rem];
              }else{
                sides[1]=Ctrl.list[rem];
              }
            }
            Ctrl.loopInterval = $interval(function () {
              Ctrl.head = !Ctrl.head;
              count++;
              $timeout(updateSides,1500);
              /* jshint undef: false */
              $element.find('.skill-icon').css({
                'transform': Ctrl.head ? 'perspective(400px)  rotateY(-180deg)' : 'none'
              });
            }, 3500);
            Ctrl.side = function (i) {
              return { 'background-image': 'url(' + sides[i] + ')' };
            };
            Ctrl.showModal = function () {
              var list = Ctrl.list.map(function (x) {
                return { img: x };
              });
              $rootScope.$broadcast('$showModal', list);
            };
            $scope.$on('$destroy', function () {
              $interval.cancel(Ctrl.loopInterval);
            });
          };

      }
    };
  });
