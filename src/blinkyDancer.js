var makeBlinkyDancer = class BlinkyDancer extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.addClass('blinky');
    this.colors = ['aqua', 'aquamarine', 'deepskyblue', 'chartreuse', 'cyan', 'yellow', 'springgreen', 'lime', 'mediumseagreen', 'green', 'turquoise', 'darkturquoise', 'dodgerblue', 'ivory', 'white', 'honeydew', 'azure']
    this.step();
  }

  getRandomColor() {
    let randomIndex = Math.floor(Math.random() * 17);
    return this.colors[randomIndex];
  };

  step() {
    makeDancer.prototype.step.call(this);
    this.$node.toggle();
    this.$node.css('border-color', `${this.getRandomColor()}`);
  };
};
