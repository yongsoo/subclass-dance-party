describe("dancer", function() {

  var dancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new CircleDancer(10, 20, timeBetweenSteps, "circle");
  });

  it("should have a jQuery $node object", function(){
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  xit("should have a step function that makes its node blink", function() {
    sinon.spy(dancer.$node, 'toggle');
    dancer.step();
    expect(dancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(dancer, "step");
      expect(dancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(dancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(dancer.step.callCount).to.be.equal(2);
    });
  });
});
