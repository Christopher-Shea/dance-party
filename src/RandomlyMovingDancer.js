var makeRandomDancer = class RandomlyMovingDancer extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.addClass('RMDancer');
    //this.step();
  }

  step(hammer) {
    makeDancer.prototype.step.call(this);
    this.$node.animate(this.getRandomPosition(), this.timeBetweenSteps);
  };
};
