var SquareDancer = function(top, left, timeBetweenSteps, className){
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps, className);
  this.top = top;
  this.left = left;
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;
SquareDancer.prototype.step = function () {
  this.oldStep();
  this.$node.css({
    'background-color': 'rgb(' + this.randomColor() + ', ' + this.randomColor() + ', ' + this.randomColor() + ')'
  });
  this.$node.toggle();
};