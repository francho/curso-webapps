'use strict';

describe('Controller: OtroControladorCtrl', function () {

  // load the controller's module
  beforeEach(module('calculadoraApp'));

  var OtroControladorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OtroControladorCtrl = $controller('OtroControladorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
