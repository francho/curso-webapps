/**
 * directives.js
 */

angular.module('myApp.directives', [])
.directive('fchPerro', function() {
  return {
    restrict: 'E',
    scope: {
      perro: '=fchData'
    },
    templateUrl: 'views/fch-perro.html',
    controller: function($scope) {
      $scope.verRaza = function(raza) {
        alert(raza);
      }
    }
  }
});