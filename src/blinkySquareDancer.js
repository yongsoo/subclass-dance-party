var BlinkySquareDancer = function(top, left, timeBetweenSteps, className){
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps, className);
};

BlinkySquareDancer.prototype = Object.create(Dancer.prototype);
BlinkySquareDancer.prototype.constructor = BlinkySquareDancer;
BlinkySquareDancer.prototype.step = function () {
  this.oldStep();
};