describe('Airport', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe('land a plane', function() {
    it('should be able to land a plane', function() {
      airport.land(plane)
      expect(airport.hangar).toContain(plane);
    });
  });

});
