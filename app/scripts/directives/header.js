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
            controller: function ($scope, $location, $templateCache, auth, $rootScope, $interval) {
                $templateCache.get('views/header.html');
                var Ctrl = this;
                $scope.location = $location;
                Ctrl.menu = [
                    { path: ['/'], name: 'HOME', trigger: true },
                    { path: ['/about'], name: 'ABOUT', trigger: true },
                    { path: ['/horses'], name: 'HORSES', trigger: true },
                    {
                        name: 'RIDING', trigger: false,
                        sub: [
                            { path: '/treks', name: 'TREKS' },
                            { path: '/lessons', name: 'LESSONS' },
                            { path: '/photoshoots', name: 'PHOTO SHOOTS' },
                            { path: '/picnics', name: 'PICNICS AND PARTIES' },
                            { path: '/safety', name: 'SAFETY' }
                        ]
                    },
                    { path: ['/gallery'], name: 'GALLERY', trigger: true },
                    { path: ['/contact'], name: 'CONTACT', trigger: true }
                ];
                function hideCollapse() {
                    window.$('.collapse').collapse('hide');
                }
                Ctrl.hideCollapse = hideCollapse;
                $rootScope.$on('$routeChangeSuccess', function () {
                    hideCollapse();
                    window.$('body > div.content')[0].scroll(0, 0);
                });
                // Initialize Firebase
                function initFirebase() {
                    if (window.firebase) {
                        auth.status().then(function (res) {
                            if (!res) {
                                auth.anonimusSignIn().then(function (res) {
                                    console.log(res);
                                });
                            }
                        });
                        return true;
                    }
                    return false;
                }
                var loop = $interval(function () {
                    if (initFirebase()) {
                        $interval.cancel(loop);
                    }
                }, 500);
            }
        };
    });