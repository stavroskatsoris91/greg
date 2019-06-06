'use strict';

/**
 * @ngdoc function
 * @name gregApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the gregApp
 */
angular.module('gregApp')
  .controller('GalleryCtrl', function ($templateCache,$scope) {
    $templateCache.get('views/gallery.html');
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var Ctrl = this;
    Ctrl.carousel = [
      '/images/gallery/gallery1.jpg',
      '/images/gallery/gallery2.jpg',
      '/images/gallery/gallery3.jpg',
      '/images/gallery/gallery4.jpg',
      '/images/gallery/gallery5.jpg',
      '/images/gallery/gallery6.jpg',
      '/images/gallery/gallery7.jpg',
      '/images/gallery/gallery8.jpg',
      '/images/gallery/gallery9.jpg',
      '/images/gallery/gallery10.jpg',
      '/images/gallery/gallery11.jpg',
      '/images/gallery/gallery12.jpg',
      '/images/gallery/gallery13.jpg',
      '/images/gallery/gallery14.jpg',
      '/images/gallery/gallery15.jpg',
      '/images/gallery/gallery16.jpg',
      '/images/gallery/gallery17.jpg',
      '/images/gallery/gallery18.jpg',
      '/images/gallery/gallery19.jpg',
      '/images/gallery/gallery20.jpg',
      '/images/gallery/gallery21.jpg',
      '/images/gallery/gallery22.jpg',
      '/images/gallery/gallery23.jpg'
    ];
    var cLength = Ctrl.carousel.length;
    Ctrl.initElement = function(i){
      if(i===cLength-1){
        window.$('#slick').slick({
          autoplay:true,
          arrows: true,
          dots: false,
          infinite: true});
          setHeight();

      }
    };
    function setHeight(){
      var height = window.$('.greg-carousel')[0].clientWidth*0.6668118466898955;
      window.$('.greg-carousel img').css({height:height+'px'});
      // 0.6668118466898955
    }
    window.$(window).on('resize',setHeight);
    $scope.$on('$destroy',function(){
      window.$(window).off('resize', setHeight);
    });
    // var Ctrl = this;
  });
