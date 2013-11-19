var BlinkyDancer = function(top, left, timeBetweenSteps, className){  
  Dancer.call(this, top, left, timeBetweenSteps, className);

  this.oldStep = this.step;
  this.step = function () {
    this.oldStep();
    this.$node.toggle();
  };

};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;