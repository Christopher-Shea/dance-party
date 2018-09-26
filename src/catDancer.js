var makeCatDancer = class CatDancer extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<img class="dancer kitty" src="src/nicekitty.png">');
    this.angle = 0;
    this.setPosition(this.position);
    this.step();
  }

  step() {
    makeDancer.prototype.step.call(this);
    this.angle += 10;
    this.$node.css("transform", `rotate(${this.angle}deg)`);
    };

  makeKitty() {
    var kitty = $('<img class="dancer kitten" src="src/kitten.png">');
    let kittyPosition = {top: this.top + 15, left: this.left + 15};
    console.log(kittyPosition);
    kitty.css(kittyPosition);
    $('.stage').append(kitty);
  };

};