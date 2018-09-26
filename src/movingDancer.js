var makeMovingDancer = class RandomlyMovingDancer extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<img class="dancer link" src="src/LinkGif.gif">');
    this.setPosition(this.position);
    this.step();
  }

  step() {
    makeDancer.prototype.step.call(this);
    this.$node.animate(this.getRandomPosition(), this.timeBetweenSteps);
  };
};
