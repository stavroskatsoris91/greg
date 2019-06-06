'use strict';

/**
 * @ngdoc function
 * @name gregApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the gregApp
 */
angular.module('gregApp')
  .controller('ContactCtrl', function ($templateCache, books,$scope) {
    $templateCache.get('views/contact.html');
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var Ctrl = this;
    Ctrl.ridings = [
      'TREK',
      'LESSON',
      'PHOTO SHOOT',
      'PICNIC / PARTIE'
    ];
      Ctrl.riding = Ctrl.ridings[0];
    Ctrl.treks = [
      '1 - Coastal Road',
      '2 - Panagia Elonas',
      '3 - Hara Estate',
      '4 - Hunters\' Refuge',
      '5 - Panagia Daskalaki',
      '6 - Profitis Ilias'
    ];
    Ctrl.levels = [
      'Novice',
      'Intermediate',
      'Advanced'
    ];
    var rider = {
      name:'',
      height:'',
      weight:'',
      age:'',
      level:'Novice',
    };
    function init(){
        Ctrl.form = books.getFrom()?books.getFrom():{
          name:'',
          email:'',
          tel:'',
          date:'',
          riding:Ctrl.ridings[0],
          trek:Ctrl.treks[0],
          riders:[angular.copy(rider)],
          message:'',
          accept:false
        };
    }
    init();
    Ctrl.minDate = new Date().toISOString().slice(0,-8);
    Ctrl.riders =[angular.copy(rider)];



    Ctrl.addRider = function(){
      Ctrl.form.riders.push(angular.copy(rider));
    };
    Ctrl.removeRider = function(i){
      Ctrl.form.riders.splice(i,1);
    };
    Ctrl.submitForm = function () {
      var data = angular.copy(Ctrl.form);
      if(data.riding!=='TREK'){
        delete data.treck;
      }
      var year = data.date.getFullYear();
      var month = data.date.getMonth()+1;
      var day = data.date.getDate();
      var hour = data.date.getHours();
      var minutes = data.date.getMinutes()>9?'0'+data.date.getMinutes():data.date.getMinutes();
      var date = day+'/'+month+'/'+year+' '+hour+':'+minutes;
      data.date = date;
      books.makeBook(data).then(function (res) {
        console.log(res);
      });
    };
    Ctrl.scrollTo = function(id){
      var element = document.getElementById(id);
      element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    };
    $scope.$on('$destroy', function () {
      books.setFrom(Ctrl.form);
    });
  });
