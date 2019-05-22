'use strict';

/**
 * @ngdoc directive
 * @name gregApp.directive:header
 * @description
 * # header
 */
angular.module('gregApp')
    .directive('header', function () {
        return {
            scope: {},
            bindToController: {},
            restrict: 'E',
            templateUrl: 'views/header.html',
            replace: true,
            controllerAs: 'Ctrl',
            controller: function ($scope, $location, $templateCache, auth,$rootScope) {
                $templateCache.get('views/header.html');
                var Ctrl = this;
                $scope.location = $location;
                Ctrl.menu = [
                    { path: ['/'], name: 'HOME', trigger:true},
                    { path: ['/about'], name: 'ABOUT', trigger:true },
                    { path: ['/horses'], name: 'HORSES', trigger:true },
                    {
                        path: ['/treks','/lessons','/photoshoots','/picnics'],
                        name: 'RIDING', trigger:false,
                        sub: [
                            { path: '/treks', name: 'TREKS' },
                            { path: '/lessons', name: 'LESSONS' },
                            { path: '/photoshoots', name: 'PHOTO SHOOTS' },
                            { path: '/picnics', name: 'PICNICS AND PARTIES' }
                        ]
                    },
                    { path: ['/gallery'], name: 'GALLERY', trigger:true },
                    { path: ['/contact'], name: 'CONTACT', trigger:true }
                ];
                $rootScope.$on('$routeChangeSuccess',function(){
                    /* jshint undef: false */
                    $('.collapse').collapse('hide');
                });
                // Initialize Firebase
                if(window.firebase){
                    window.firebase.initializeApp({
                        apiKey: 'AIzaSyDyjdfkFLxHbeMQw4_sqmL7WNmy6L9iIxI',
                        authDomain: 'greg-8095f.firebaseapp.com',
                        databaseURL: 'https://greg-8095f.firebaseio.com',
                        projectId: 'greg-8095f',
                        storageBucket: 'greg-8095f.appspot.com',
                        messagingSenderId: '475809743777'
                    });
                }
                if(window.auth){
                    auth.status().then(function (res) {
                        if (!res) {
                            auth.anonimusSignIn().then(function (res) {
                                console.log(res);
                            });
                        }
                    });
                }
            }
        };
    });
