var makeDancer = class Dancer {
  constructor(top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;
    //this.step();
    this.setPosition(this.top, this.left);
  }

  step(stepFunction) {
    setInterval(stepFunction, this.timeBetweenSteps);
  };

  setPosition(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };
};