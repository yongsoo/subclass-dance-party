var BlinkyCircleDancer = function(top, left, timeBetweenSteps, className){
  Dancer.call(this, top, left, timeBetweenSteps, className);

  this.oldStep = Dancer.prototype.step;
  this.step();
};

BlinkyCircleDancer.prototype = Object.create(Dancer.prototype);
BlinkyCircleDancer.prototype.constructor = BlinkyCircleDancer;
BlinkyCircleDancer.prototype.step = function () {
  this.oldStep();
  this.$node.toggle();
};
