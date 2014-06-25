/**
 * app.js
 */

'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.controllers'
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller : 'MainCtl',
    templateUrl: 'views/main.html'
  });

  $routeProvider.otherwise({redirectTo: '/view1'});

}]);
