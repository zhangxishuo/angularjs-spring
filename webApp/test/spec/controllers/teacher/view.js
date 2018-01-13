'use strict';

describe('Controller: TeacherViewCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var TeacherViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeacherViewCtrl = $controller('TeacherViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeacherViewCtrl.awesomeThings.length).toBe(3);
  });
});
