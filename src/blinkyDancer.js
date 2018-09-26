var makeBlinkyDancer = class BlinkyDancer extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.addClass('blinky');
  }

  step() {
    makeDancer.prototype.step.call(this);
    this.$node.toggle();
  };
};
