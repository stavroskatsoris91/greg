'use strict';

/**
 * @ngdoc directive
 * @name gregApp.directive:background
 * @description
 * # background
 */
angular.module('gregApp')
  .directive('background', function () {
    return {
      scope: {},
      bindToController: {},
      restrict: 'E',
      templateUrl: 'views/background.html',
      replace: true,
      controllerAs: 'Ctrl',
      controller: function ($templateCache,$rootScope,$location) {
          $templateCache.get('views/background.html');
          var Ctrl = this;
          // var images = [];
          var paths = [
            {name:'/',image:'/images/background/home.jpg'},
            {name:'/about',image:'/images/background/about.jpg'},
            {name:'/horses',image:'/images/background/horses.jpg'},
            {name:'/treks',image:'/images/background/treks.jpg'},
            {name:'/riding',image:'/images/background/riding.jpg'},
            {name:'/gallery',image:'/images/background/gallery.jpg'},
            {name:'/contact',image:'/images/background/contact.jpg'},
            {name:'/lessons',image:'/images/background/lessons.jpg'},
            {name:'/photoshoots',image:'/images/background/photoshoots.jpg'},
            {name:'/picnics',image:'/images/background/picnics.jpg'},
            {name:'/safety',image:'/images/background/safety.jpg'}
          ];
          Ctrl.count = 0;
          Ctrl.scrollTop = 0;
          function changeBackground(path,count){
            var image = paths[0].image;
            var show = count%2;
            paths.some(function(x){
              if(x.name===path){
                image = x.image;
                return true;
              }
            });
            // images[show] =  image;
            window.$('<img/>').attr('src', image).on('load', function() {
              window.$(this).remove(); // prevent memory leaks as @benweet suggested
              window.$('#background-'+(show+1)+' > div.animation').css({
                'background-image': 'url('+image+')'
              });
              window.$('#background-2').css({
                'opacity': count%2===1?1:0
              });
              Ctrl.count = count;
            });
          }
          window.$('body > div.content').on('scroll',function(e){
            Ctrl.scrollTop = e.currentTarget.scrollTop/(e.currentTarget.scrollHeight-window.innerHeight)*30;
            window.$('body > div > div.background > div').css({
              'transform': 'translateY(-'+Ctrl.scrollTop+'%)'
            });
          });
          changeBackground($location.path(),Ctrl.count);
          $rootScope.$on('$routeChangeStart', function (ev,to) {
            if(to){
            changeBackground(to.$$route.originalPath,Ctrl.count+1);
            // Ctrl.openSearch = false;
            }
          });
      }
  };
});
