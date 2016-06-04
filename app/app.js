'use strict';

// Declare app level module which depends on views, and componentsangular.module("myApp.controllers", []);
angular.module("myApp.services", []);

angular.module('myApp', [
  'ui.router',
  'ui.bootstrap',
  'ui.mask',
  'ngAnimate', 
  'mgcrea.ngStrap',
  'myApp.version',
  "myApp.controllers", 
  "myApp.services",
  "myApp.directives",
  "myApp.filters"
]).
config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/list');

  $stateProvider
        .state('list', {
            url: '/list',
            templateUrl: 'partial/home.html',
            controller: 'listController'
        })
        .state('detail', {
            url: '/detail/:id',
            templateUrl: 'partial/detail.html',
            controller: 'detailController'
        });

});
