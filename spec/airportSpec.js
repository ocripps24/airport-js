'use strict';

describe('Airport', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });
  describe('Default state', function() {
    it('has no planes', function() {
      expect(airport.hangar).toEqual([]);
    });
  });

  describe('land a plane', function() {
    it('should be able to land a plane', function() {
      airport.land(plane)
      expect(airport.hangar).toContain(plane);
    });
  });

});
