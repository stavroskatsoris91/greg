'use strict';

/**
 * @ngdoc function
 * @name gregApp.controller:HorsesCtrl
 * @description
 * # HorsesCtrl
 * Controller of the gregApp
 */
angular.module('gregApp')
  .controller('HorsesCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var Ctrl = this;
    var now = new Date().getFullYear();
    function getAge(year){
      return now-year;
    }
    Ctrl.horses = [
      {
        name: 'REBECCA',
        breed: 'Chestnut',
        age: getAge(2003)+' years old',
        height: '1.35m',
        images: ['images/horses/rebecca1.jpg','images/horses/rebecca2.jpg','images/horses/rebecca3.jpg','images/horses/rebecca4.jpg'],
        text: ['Rebecca is the smallest but the head of the herd, she\'s the boss!',
          'She has a strong character, she pulls faces at the other horses to remind them of their place. She is a very safe and relaxed horse. She loves children, she has so much patience and really looks after her rider.']
      }, {
        name: 'ROBBIE',
        breed: 'Haflinger',
        age: getAge(2009)+' years old',
        height: '1.50m',
        images:['images/horses/robbie1.jpg','images/horses/robbie2.jpg','images/horses/robbie3.jpg','images/horses/robbie4.jpg','images/horses/robbie5.jpg'],
        text: ['Robbie is the gentleman of the family, when Robbie first arrived he was a very unconfident horse, non of the mares like him, which didn\'t help! Throughout his training his true character shone through. He loves his rubs and wants lots of attention. He really enjoys his treks and is a content, safe horse.']
      }, {
        name: 'MILLY',
        breed: 'Chestnut',
        age: getAge(2009)+' years old',
        height: '1.70m',
        images:['images/horses/milly1.jpg','images/horses/milly2.jpg','images/horses/milly3.jpg'],
        text: ['Milly is a retrained English thoroughbred. She is a very intelligent, relaxed and confident horse. Despite her height, I can trust her to look after the most inexperienced rider, even a small child, with no doubt in my mind.',
          'She will carry you anywhere and everywhere you wish.'],
      }, {
        name: 'STAVRINA',
        breed: 'Chestnut',
        age: getAge(2003)+' years old',
        height: '1.65m',
        images: ['images/horses/stavrina1.jpg','images/horses/stavrina2.jpg'],
        text: ['Stavrina is an English thoroughbred. She is lovely to ride and suitable for all levels of experience. She has a very calm, quiet nature. Stavrina will build a nervous riders confidence. She really enjoys getting out and about on the Spetses treks.']
      }, {
        name: 'NELLY',
        breed: '-',
        age: getAge(2009)+' years old',
        height: '1.45m',
        images:['images/horses/nelly1.jpg','images/horses/nelly2.jpg','images/horses/nelly3.jpg'],
        text: ['Nelly is a roan characterized by the white hairs intermingled throughout her bay coat. She has a very calm, quiet nature and is always keen to please her riders.']
      }, {
        name: 'OSCAR',
        breed: 'Pinto',
        age: getAge(2010)+' years old',
        height: '1.40m',
        images:['images/horses/oscar1.jpg','images/horses/oscar2.jpg','images/horses/oscar3.jpg'],
        text: ['Oscar is a new pony in the family. He has a fun, cheeky character and loves his treks. Many recognise Oscar as he was previously part of Harriet\'s team on Hydra.']
      }, {
        name: 'OLIVIA',
        breed: 'Dappled Grey',
        age: getAge(2011)+' years old',
        height: '1.60m',
        images:['images/horses/olivia1.jpg','images/horses/olivia2.jpg','images/horses/olivia3.jpg'],
        text: ['Olivia has been in our family since she was 3months old. She has a very inquisitive character, her curiosity is endless. She loves people and can never resist the chance to lick you.',
          'She is a relaxed horse but always very attentive to her rider.']
      }
    ];
  });
