'use strict';

describe('Controller: PicnicsCtrl', function () {

  // load the controller's module
  beforeEach(module('gregApp'));

  var PicnicsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PicnicsCtrl = $controller('PicnicsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PicnicsCtrl.awesomeThings.length).toBe(3);
  });
});
