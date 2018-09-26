describe('catDancer', function() {

  var catDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    catDancer = new makeCatDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(catDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that changes its style', function() {
    sinon.spy(catDancer.$node, 'css');
    catDancer.step();
    expect(catDancer.$node.css.called).to.be.true;
  });

  describe('rotate', function() {
    it('should call step at least once per second', function() {
      sinon.spy(catDancer, 'step');
      expect(catDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(catDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(catDancer.step.callCount).to.be.equal(2);
    });
  });
});