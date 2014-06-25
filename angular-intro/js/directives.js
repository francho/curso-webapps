/**
 * directives.js
 */

angular.module('myApp.directives', [])
.directive('fchPerro', function() {
    console.log('in******');
  return {
//    scope: {
//      perro: '=fchData'
//    },
    template: 'perro'
   // template: 'nombre: <b>{{ perro.nombre }}</b> raza: <i>{{perro.raza}}</i>'
  }
});