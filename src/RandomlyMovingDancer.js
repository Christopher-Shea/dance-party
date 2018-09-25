var makeRandomDancer = class RandomlyMovingDancer extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<img class="dancer link" src="src/LinkGif.gif">');
    this.setPosition(this.position);
    //this.step();
  }

  step(hammer) {
    makeDancer.prototype.step.call(this);
    if(!this.linedUp){
   
      this.$node.animate(this.getRandomPosition(), this.timeBetweenSteps*2);
    }
  };
};
