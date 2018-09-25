var d = class RandomlyMovingDancer extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.addClass('RMDancer');
    //this.step();
  }

  step() {
    makeDancer.prototype.step.call(this);
    this.$node.animate(this.getPosition(), this.timeBetweenSteps);
  }
  getPosition() {
    var numx = Math.random() * $('body').height();
    var numy = Math.random() * $('body').width();
    console.log(numx);
    return {
      left: numx,
      top: numy
    };
  }
};
