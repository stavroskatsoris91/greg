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
    var savedForm = null;
    var ridings = [
      {
        name:'TREK',
        display:'Trek',
        options:[
          {name:'1 - Coastal Road',price:30},
          {name:'2 - Panagia Elonas',price:58},
          {name:'3 - Hara Estate',price:69},
          {name:'4 - Hunters\' Refuge',price:77},
          {name:'5 - Panagia Daskalaki',price:95},
          {name:'6 - Profitis Ilias',price:122}
        ],
        selected:0
      },
      { 
        name:'LESSON',
        display:'Lesson',
        options:[
          {name:'30min',price:20},
          {name:'45min',price:30},
          {name:'60min',price:40}
        ],
        selected:0
      },
      {name:'PHOTO SHOOT',display:'Photo Shoot',selected:null},
      {name:'PICNIC / PARTY',display:'Picnic / Party',selected:null}
    ];
    function makeBook(data) {
      var bookTime = firebase.functions().httpsCallable('bookTime');
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
    function setForm(form){
      savedForm = form;
    }
    function getFrom(){
      return savedForm;
    }
    return { 
      makeBook: makeBook,
      getTime: getTime,
      setFrom: setForm,
      getFrom: getFrom,
      ridings: ridings  };
  });
