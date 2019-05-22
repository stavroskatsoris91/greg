'use strict';

/**
 * @ngdoc directive
 * @name gregApp.directive:googlemap
 * @description
 * # googlemap
 */
angular.module('gregApp')
  .directive('googlemap', function () {
    return {
      scope: {},
      bindToController: {},
      restrict: 'E',
      template: '<div class="google-maps"></div>',
      replace: true,
      controllerAs: 'Ctrl',
      controller: function ($scope,$compile,$element,$timeout) {
        var Ctrl = this;
        var google = window.google;
        function initialize() {

          Ctrl.map = new google.maps.Map($element[0], {
            zoom: 18,
            center: { lat: 37.239282, lng: 23.147472 },
            mapTypeId: 'satellite',
          });



          Ctrl.cities = [
            { title: 'Greg\' Spetses Horses', lat: 37.239282, lng: 23.147472 ,icon:'/images/horse0.png'},
            { title: 'Greg\' Spetses Horses', lat: 37.239148, lng: 23.147901 ,icon:'/images/horse1.png'},
            { title: 'Greg\' Spetses Horses', lat: 37.239151, lng: 23.147985 ,icon:'/images/horse2.png'},
            { title: 'Greg\' Spetses Horses', lat: 37.239063, lng: 23.147970 ,icon:'/images/horse3.png'},
            { title: 'Greg\' Spetses Horses', lat: 37.239062, lng: 23.147870 ,icon:'/images/horse4.png'},
          ];


          Ctrl.infowindow = new google.maps.InfoWindow({
            content: 'hello'
          });


          for (var i = 0; i < Ctrl.cities.length; i++) {


            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(Ctrl.cities[i].lat, Ctrl.cities[i].lng),
              map: Ctrl.map,
              icon: Ctrl.cities[i].icon,
              title: Ctrl.cities[i].title
            });

            var content = '<div>Starting Point</div>';//'<a ng-click="Ctrl.cityDetail(' + i + ')" class="btn btn-default">View details</a>';
            var compiledContent = $compile(content)($scope);
            /* jshint loopfunc: true */
            google.maps.event.addListener(marker, 'click', (function (marker, content, scope) {
              return function () {
                scope.infowindow.setContent(content);
                scope.infowindow.open(scope.map, marker);
              };
            })(marker, compiledContent[0], Ctrl));
            
          }
          $timeout(function(){
            $element[0].previousElementSibling.remove();

          },1000);

        }

        Ctrl.cityDetail = function (index) {
          return index;
        };
        initialize();

      }
    };
  });
