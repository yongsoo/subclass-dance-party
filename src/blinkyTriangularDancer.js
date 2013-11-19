var BlinkyTriangularDancer = function(top, left, timeBetweenSteps, className){
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps, className);
};

BlinkyTriangularDancer.prototype = Object.create(Dancer.prototype);
BlinkyTriangularDancer.prototype.constructor = BlinkyTriangularDancer;
BlinkyTriangularDancer.prototype.step = function () {
  this.oldStep();
  this.$node.css({
    '-webkit-transform': 'rotate(-' + this.randomAngle() + 'deg)',
    'border-bottom-color': 'rgb(' + this.randomColor() + ', ' + this.randomColor() + ', ' + this.randomColor() + ')'
  });
};
