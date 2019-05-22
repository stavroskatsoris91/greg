'use strict';

describe('Controller: PhotoshootsCtrl', function () {

  // load the controller's module
  beforeEach(module('gregApp'));

  var PhotoshootsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhotoshootsCtrl = $controller('PhotoshootsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PhotoshootsCtrl.awesomeThings.length).toBe(3);
  });
});
