describe('movingDancer', function() {

  var linkDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    linkDancer = new makeMovingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(linkDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that changes its position', function() {
    sinon.spy(linkDancer.$node, 'animate');
    linkDancer.step();
    expect(linkDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(linkDancer, 'step');
      expect(linkDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(linkDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(linkDancer.step.callCount).to.be.equal(2);
    });
  });
});