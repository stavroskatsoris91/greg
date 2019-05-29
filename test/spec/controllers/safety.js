'use strict';

describe('Controller: SafetyCtrl', function () {

  // load the controller's module
  beforeEach(module('gregApp'));

  var SafetyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SafetyCtrl = $controller('SafetyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SafetyCtrl.awesomeThings.length).toBe(3);
  });
});
