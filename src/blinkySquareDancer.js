var BlinkySquareDancer = function(top, left, timeBetweenSteps, className){
  Dancer.call(this, top, left, timeBetweenSteps, className);

  this.oldStep = Dancer.prototype.step;
  this.step();
};

BlinkySquareDancer.prototype = Object.create(Dancer.prototype);
BlinkySquareDancer.prototype.constructor = BlinkySquareDancer;
BlinkySquareDancer.prototype.step = function () {
  this.oldStep();
  this.$node.toggle();
};