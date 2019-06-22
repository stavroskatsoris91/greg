'use strict';

/**
 * @ngdoc function
 * @name gregApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the gregApp
 */
angular.module('gregApp')
  .controller('ContactCtrl', function ($templateCache, books, $scope) {
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
      'PICNIC / PARTY'
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
    Ctrl.hours = new Array(12).fill(7).map(function(x,i){return x+i;});
    Ctrl.minutes = ['00','15','30','45'];
    var rider = {
      name:'',
      height:'',
      weight:'',
      age:'',
      level:'Novice',
    };
    Ctrl.payments = ['Cash on the Day', 'Bank Transfer'];
    function init(){
        Ctrl.form = books.getFrom()?books.getFrom():{
          name:'',
          email:'',
          tel:'',
          date: new Date(new Date().setDate(new Date().getDate()+1)),
          hour: Ctrl.hours[0],
          minutes: Ctrl.minutes[0],
          riding:Ctrl.ridings[0],
          trek:Ctrl.treks[0],
          riders:[angular.copy(rider)],
          message:'',
          payment:'Cash on the Day',
          accept:false
        };
    }
    init();
    Ctrl.minDate = new Date().toISOString().slice(0,-8);
    Ctrl.riders =[angular.copy(rider)];
    var prices = [30,58,69,77,95,122];
    Ctrl.price = function(){
      var total = 0;
      if(Ctrl.form&&Ctrl.form.riding===Ctrl.ridings[0]){
        total = prices[Ctrl.treks.indexOf(Ctrl.form.trek)]*Ctrl.form.riders.length;
      }
      return total?'- €'+total:'';
    };


    Ctrl.addRider = function(){
      Ctrl.form.riders.push(angular.copy(rider));
    };
    Ctrl.removeRider = function(i){
      Ctrl.form.riders.splice(i,1);
    };
    Ctrl.changeHour = function(){
      if(Ctrl.form.hour===Ctrl.hours[Ctrl.hours.length-1]){
        Ctrl.form.minutes=Ctrl.minutes[0];
      }
    };
    Ctrl.submitForm = function () {
      if(Ctrl.run){
        return;
      }
      Ctrl.run = true;
      var data = angular.copy(Ctrl.form);
      if(data.riding!=='TREK'){
        delete data.treck;
      }
      var year = data.date.getFullYear();
      var month = data.date.getMonth()+1;
      var day = data.date.getDate();
      var date = day+'/'+month+'/'+year+' '+data.hour+':'+data.minutes;
      data.date = date;
      data.payment = data.payment+' '+Ctrl.price();
      books.makeBook(data).then(function (res) {
        console.log(res);
        Ctrl.form = null;
        window.location = '/thankyou';
        Ctrl.run = false;
      }).catch(function(){
        Ctrl.run = false;
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
