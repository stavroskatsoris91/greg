'use strict';

/**
 * @ngdoc function
 * @name gregApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the gregApp
 */
angular.module('gregApp')
  .controller('HomeCtrl', function ($templateCache, auth,books) {
    $templateCache.get('views/home.html');
    var Ctrl = this;
    Ctrl.text = 'Home';
    Ctrl.signUp = function (email, password) {
      auth.signUp(email, password).then(function (res) {
        console.log(res);
      });
    };
    Ctrl.signIn = function (email, password) {
      auth.signIn(email, password).then(function (res) {
        console.log(res);
      });
    };
    Ctrl.subscribe = function(){
      auth.subscribe().then(function(res){
        console.log(res);
      });
    };
    Ctrl.unsubscribe = function(){
      auth.unsubscribe().then(function(res){
        console.log(res);
      });
    };
    Ctrl.makeBook = function(time,adults,kids){
      books.makeBook(time,adults,kids).then(function(res){
        console.log(res);
      });
    };
    Ctrl.getTime = function(){
      books.getTime().then(function(res){
        console.log(res);
      });
    };
    Ctrl.homeText = [
      'Do something different while visiting Spetses! Try horse trekking to see the island’s countryside and enjoy the panoramic views of the sparkling sea from above. We have six great treks for you to choose from.',
      'For those who love horse riding we offer riding lessons in our outdoors arena next to the view of the sea and Spetspoula island. We have private lessons and group lessons if you want to come up with friends. Or you can a enjoy a little ride in our arena for 12 euros.',
      'Apart from riding you can enjoy a picnic with your friends or organize kids’ parties with pony rides in the arena.  We also provide our horses for photoshoots for any special occasion.'
    ];
  });