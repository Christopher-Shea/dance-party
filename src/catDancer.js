var makeCatDancer = class CatDancer extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<img class="dancer kitty" src="src/nicekitty.png">');
    this.setPosition(this.top, this.left);
    // (this.step();))
  }

  // step() {
  //   setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // };

  step() {
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this);
    //this.$node.css("transform", "90deg");
    };

};