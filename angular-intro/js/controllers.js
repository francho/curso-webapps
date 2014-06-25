/**
 * controllers.js
 */

"use strict";

angular.module('myApp.controllers', [])
  .controller('MainCtl', function($scope) {

    $scope.nombre = '';

    $scope.perros = [
      { nombre: 'Lucas', raza: 'Schauzer' },
      { nombre: 'Frodo', raza: 'Bichon Habanero' },
      { nombre: 'Trufa', raza: 'Pastor Aleman'}
    ];


  });
