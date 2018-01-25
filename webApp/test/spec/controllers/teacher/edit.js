'use strict';

describe('Controller: TeacherEditCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var TeacherEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeacherEditCtrl = $controller('TeacherEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeacherEditCtrl.awesomeThings.length).toBe(3);
  });
});
