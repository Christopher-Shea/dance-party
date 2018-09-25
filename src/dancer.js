var makeDancer = class Dancer {
  constructor(top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
    this.top = top;
    this.left = left;
    this.gotInLine = false;
    this.position = {
      top, left
    };
    this.timeBetweenSteps = timeBetweenSteps;
    this.hammer = false;
    this.timeoutID;
    this.currentNode = 0;
    this.nodes = [{
      top: '8%',
      left: '8%'
    },
    {
      top: '92%',
      left: '8%'
    },
    {
      top: '92%',
      left: '92%'
    },
    {
      top: '8%',
      left: '92%'
    }];
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
    this.$node.css(positionObject);
  };

  lineUp() {
    this.$node.animate(this.nodes[this.currentNode], 5000, 'linear', this.goToNextNode.bind(this));
  };

  goToNextNode(){
    this.currentNode = (this.currentNode === 3) ?  0 : this.currentNode + 1;
    this.lineUp(); 
  };

  breakOut() {
    this.linedUp = false;
    this.gotInLine = false;
    this.currentNode = 0;
    this.stop();
    this.$node.animate(this.getRandomPosition(), 3000);
    this.step();
  }

  stop() {
    this.$node.toggle(true);
    this.$node.stop();
    clearTimeout(this.timeoutID);
  };

  hammerTime() {
    this.hammer = true;
    clearTimeout(this.timeoutID);
    this.$node.stop();
    this.timeBetweenSteps = this.timeBetweenSteps / 15;
    this.step();
  };

};
