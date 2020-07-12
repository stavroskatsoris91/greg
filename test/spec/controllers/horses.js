'use strict';

describe('Controller: HorsesCtrl', function () {

  // load the controller's module
  beforeEach(module('gregApp'));

  var HorsesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HorsesCtrl = $controller('HorsesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HorsesCtrl.awesomeThings.length).toBe(3);
  });
});
