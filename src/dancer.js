var makeDancer = class Dancer {
  constructor(top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;
    this.timeoutID;
    this.setPosition(this.top, this.left);
    this.step();
  }

  step() {
    this.timeoutID = setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };

  setPosition(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  lineUp(number) {
    this.setPosition(`${number * 25}px`, `${number * 25}px`);
  };

  stop() {
    clearTimeout(this.timeoutID);
  };

  hammerTime() {
    this.timeBetweenSteps = this.timeBetweenSteps / 2;
    this.step();
  };

};
