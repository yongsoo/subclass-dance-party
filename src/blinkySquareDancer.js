var BlinkySquareDancer = function(top, left, timeBetweenSteps, className){

  Dancer.call(this, top, left, timeBetweenSteps, className);

  this.oldStep = this.step;
  this.step = function () {
    this.oldStep();
    this.$node.toggle();
  };

};

BlinkySquareDancer.prototype = Object.create(Dancer.prototype);
BlinkySquareDancer.prototype.constructor = BlinkySquareDancer;
