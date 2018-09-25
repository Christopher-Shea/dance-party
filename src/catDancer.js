var makeCatDancer = class CatDancer extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<img class="dancer kitty" src="src/nicekitty.png">');
    this.angle = 0;
    this.setPosition(this.position);
    //this.step();
  }

  // step() {
  //   setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // };

  step() {
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this);
    this.angle += 25;
    this.$node.css("transform", `rotate(${this.angle}deg)`);
    };

};