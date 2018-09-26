var makeDancer = class Dancer {
  constructor(top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
    this.top = top;
    this.left = left;
    this.position = {
      top, 
      left
    };
    this.timeBetweenSteps = timeBetweenSteps;
    this.isHammer = false;
    this.timeoutID;
    this.currentNode = 0;
    this.nodes = [{
      top: '12%',
      left: '12%'
    },
    {
      top: '92%',
      left: '12%'
    },
    {
      top: '92%',
      left: '92%'
    },
    {
      top: '12%',
      left: '92%'
    }];
    this.setPosition(this.position);
  }

  step() {
    this.timeoutID = setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };

  stop() {
    this.$node.toggle(true);
    clearTimeout(this.timeoutID);
    this.$node.stop();
    this.isHammer = false;
  };

  hammerTime() {
    this.isHammer = true;
    clearTimeout(this.timeoutID);
    this.$node.stop();
    this.timeBetweenSteps = this.timeBetweenSteps / 15;
    this.step();
  };

  resetHammer(){
    this.isHammer = false;
    clearTimeout(this.timeoutID);
    this.timeBetweenSteps = this.timeBetweenSteps * 15;
  };

  getRandomPosition() {
    var maxY = Math.random() * $('.stage').height() + 80;
    var maxX = Math.random() * $('.stage').width();
    return {
      top: maxY,
      left: maxX
    };
  };

  setPosition(positionObject) {
    this.top = positionObject.top;
    this.left = positionObject.left;
    this.position = {
      top: this.top,
      left: this.left
    }
    this.$node.css(positionObject);
  };

  conga() {
    this.$node.animate(this.nodes[this.currentNode], 3500, 'linear', this.goToNextNode.bind(this));
  };

  goToNextNode(){
    this.currentNode = (this.currentNode === 3) ?  0 : this.currentNode + 1;
    this.conga();
  };

  breakOut() {
    if (this.isHammer === true) {
      this.resetHammer();
    }
    this.stop();
    this.currentNode = 0;
    this.$node.animate(this.position, 2500);
    this.step();
  }

};
