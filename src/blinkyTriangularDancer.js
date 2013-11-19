var BlinkyTriangularDancer = function(top, left, timeBetweenSteps, className){
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps, className);
};

BlinkyTriangularDancer.prototype = Object.create(Dancer.prototype);
BlinkyTriangularDancer.prototype.constructor = BlinkyTriangularDancer;
BlinkyTriangularDancer.prototype.step = function () {
  this.oldStep();
};
