var makeDancer = class Dancer {
  constructor(top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
    this.top = top;
    this.left = left;
    this.linedUp = false;
    this.gotInLine = false;
    this.position = {
      top, left
    };
    this.timeBetweenSteps = timeBetweenSteps;
    this.timeoutID;
    this.currentNode = 0;
    this.nodes = [{
      top: '5%',
      left: '5%'
    },
    {
      top: '90%',
      left: '5%'
    },
    {
      top: '90%',
      left: '90%'
    },
    {
      top: '5%',
      left: '90%'
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

  lineUp(rate = 5000) {
    this.linedUp = true;
    this.$node.animate(this.nodes[this.currentNode], rate, 'linear', this.goToNextNode.bind(this));
  };

  goToNextNode(){
    this.currentNode = (this.currentNode === 3) ?  0 : this.currentNode + 1; 
    this.lineUp();
  }


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
