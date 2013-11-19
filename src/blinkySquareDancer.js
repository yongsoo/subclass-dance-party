var BlinkySquareDancer = function(top, left, timeBetweenSteps, className){
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps, className);
  this.top = top;
  this.left = left;
};

BlinkySquareDancer.prototype = Object.create(Dancer.prototype);
BlinkySquareDancer.prototype.constructor = BlinkySquareDancer;
BlinkySquareDancer.prototype.step = function () {
  this.oldStep();
  this.$node.css({
    'background-color': 'rgb(' + this.randomColor() + ', ' + this.randomColor() + ', ' + this.randomColor() + ')'
  });
  this.$node.toggle();
};