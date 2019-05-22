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
  });