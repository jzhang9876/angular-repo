'use strict';

var appService = angular.module('myApp.services', ['ngResource']);

appService.factory('n400Service', function($resource) {
return $resource('http://localhost:8080/n400/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
    },
    get: {
      method: 'GET',
      isArray: false
    }
  });

  });