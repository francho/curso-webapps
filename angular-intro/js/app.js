/**
 * app.js
 */

'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.controllers',
  'myApp.directives'
])

  .config(
  ['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/', {
          controller : 'MainCtl',
          templateUrl: 'views/main.html'
        })
        .otherwise({redirectTo: '/view1'});

    }]
);
