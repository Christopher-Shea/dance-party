var makeDancer = class Dancer {
  constructor(top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
    this.top = top;
    this.left = left;
    this.position = {
      top, left
    };
    this.timeBetweenSteps = timeBetweenSteps;
    this.timeoutID;
    this.setPosition(this.position);
    this.step();
  }

  step() {
    this.timeoutID = setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };

  getRandomPosition() {
    var maxX = Math.random() * $('body').width();
    var maxY = Math.random() * $('body').height();
    return {
      top: maxY,
      left: maxX
    };
  };

  setPosition(positionObject) {
    // var styleSettings = {
    //   top: top,
    //   left: left
    // };
    this.$node.css(positionObject);
  };

  lineUp(number) {
    this.linedUp = true;
    let position = number
    this.setPosition(`${number * 25}px`, `${number * 25}px`);
    while (this.linedUp = true) {
      this.$node.animate({}, 1000);
      position = postion;
    }
    let newPosition = getRandomPosition();
    setPosition(newPosition.top, newPosition.left);
  };

  breakOut() {
    this.linedUp = false;
  }

  stop() {
    clearTimeout(this.timeoutID);
  };

  hammerTime() {
    clearTimeout(this.timeoutID);
    this.timeBetweenSteps = this.timeBetweenSteps / 2;
    this.step();
  };

};
