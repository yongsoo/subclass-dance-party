var BlinkyTriangularDancer = function(top, left, timeBetweenSteps, className){
  Dancer.call(this, top, left, timeBetweenSteps, className);

  this.oldStep = Dancer.prototype.step;
  this.step();
};

BlinkyTriangularDancer.prototype = Object.create(Dancer.prototype);
BlinkyTriangularDancer.prototype.constructor = BlinkyTriangularDancer;
BlinkyTriangularDancer.prototype.step = function () {
  this.oldStep();
  this.$node.toggle();
};
