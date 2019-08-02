'use strict';

/**
 * @ngdoc function
 * @name gregApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the gregApp
 */
angular.module('gregApp')
  .controller('ContactCtrl', function ($templateCache, books, $scope,$location) {
    $templateCache.get('views/contact.html');
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var Ctrl = this;
    
    Ctrl.ridings = books.ridings;
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
          riders:[angular.copy(rider)],
          message:'',
          payment:'Cash on the Day',
          accept:false
        };
    }
    init();
    Ctrl.minDate = new Date().toISOString().slice(0,10);
    Ctrl.riders =[angular.copy(rider)];
    Ctrl.price = function(){
      var total = 0;
      if(Ctrl.form&&Ctrl.form.riding.options){
        total = Ctrl.form.riding.options[Ctrl.form.riding.selected].price*Ctrl.form.riders.length;
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
      if(data.riding.options){
        data.riding = data.riding.name + ' : '+data.riding.options[data.riding.selected].name;
      }else{
        data.riding = data.riding.name;
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
        $location.url('/thankyou');
        Ctrl.run = false;
        $scope.$apply();
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
