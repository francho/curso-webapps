/**
 * controllers.js
 */

"use strict";

angular.module('myApp.controllers', [])
  .controller('MainCtl', function($scope) {

    $scope.nombre = '';

    $scope.perros = [
      { nombre: 'Lucas', raza: 'Schauzer', edad: 1, img: 'http://media-cache-ec0.pinimg.com/736x/ff/84/27/ff842739107e8358458854efabdc8fba.jpg' },
      { nombre: 'Frodo', raza: 'Bichon Habanero', edad: 10 },
      { nombre: 'Trufa', raza: 'Pastor Aleman', edad: 5}
    ];


  });
