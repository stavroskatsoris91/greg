'use strict';

/**
 * @ngdoc function
 * @name gregApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gregApp
 */
angular.module('gregApp')
  .controller('AboutCtrl', function ($templateCache) {
    $templateCache.get('views/about.html');

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var Ctrl = this;
    Ctrl.about=[
    'I am Greek/English, my father is Greek and my mum is English. I have lived on the beautiful Island of Spetses my whole life.',
    'My three siblings and I have grown up very close to nature with our many pets and farm animals. My Grandfather owned horses and two of my uncles still do, which are used for Buggy work (a small horse drawn open carriage). So although I have been around horses most of my life, it was at the age of fourteen that my passion for horses was ignited, when my father gifted my mum a foal. Since then I haven\'t looked back!',
    'Our horses are part of our family. I have completely trained them myself, following a very thorough process of horsemanship that is closest to the horses natural way as possible. This ensures they are confident, reliable, content, but most important of all, safe to be ridden by guests of all ages and abilities.',
    'My mum trained with the British Horse Society to become a riding instructress. Shortly after learning the basics from her I took it upon myself to educate myself on all aspects of horsemanship, their groundwork and ridden training, their everyday care and welfare, to ensure my horses are happy and healthy on a daily basis.'
    // 'After two years of preparation and following my graduation from school I decided to start my trekking business to share the joy of horses riding on Spetses. To give the many guests that visit the island the chance to see the hidden beauty and views that are otherwise very difficult to access.'
    ];
  });
