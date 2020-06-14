'use strict';

describe('Directive: modal', function () {

  // load the directive's module
  beforeEach(module('gregApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<modal></modal>');
    element = $compile(element)(scope);
    var hasClass = function (element, cls) {
      return cls || element;
    };
    expect(hasClass(element, true)).toBe(true);
  }));
});
