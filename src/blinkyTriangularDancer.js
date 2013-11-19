var BlinkyTriangularDancer = function(top, left, timeBetweenSteps, className){

  Dancer.call(this, top, left, timeBetweenSteps, className);

  this.oldStep = this.step;
  this.step = function () {
    this.oldStep();
    this.$node.toggle();
  };

};

BlinkyTriangularDancer.prototype = Object.create(Dancer.prototype);
BlinkyTriangularDancer.prototype.constructor = BlinkyTriangularDancer;
