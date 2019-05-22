'use strict';

/**
 * @ngdoc service
 * @name gregApp.books
 * @description
 * # books
 * Service in the gregApp.
 */
angular.module('gregApp')
  .service('books', function () {
    var firebase = window.firebase;
    function makeBook(time, adults, kids) {
      var bookTime = firebase.functions().httpsCallable('bookTime');
      var data = {
        time: time,
        adults: adults,
        kids: kids,
      };
      return bookTime(data).then(function (result) {
        console.log(result);
        // ...
        return true;
      }).catch(function (error) {
        console.log(error);
        return false;
      });
    }
    function getTime(time, adults, kids) {
      var getTimes = firebase.functions().httpsCallable('getTime');
      var data = {
        time: time,
        adults: adults,
        kids: kids,
      };
      return getTimes(data).then(function (result) {
        console.log(result);
        // ...
        return true;
      }).catch(function (error) {
        console.log(error);
        return false;
      });
    }
    return { 
      makeBook: makeBook,
      getTime: getTime };
  });
