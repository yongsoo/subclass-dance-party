var CircleDancer = function(top, left, timeBetweenSteps, className){
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps, className);
  this.top = top;
  this.left = left;
};

CircleDancer.prototype = Object.create(Dancer.prototype);
CircleDancer.prototype.constructor = CircleDancer;
CircleDancer.prototype.step = function () {
  var size = this.randomSize();
  this.oldStep();
  this.$node.css({
    'background-color' : 'black',
    'width' : size + 'px',
    'height' : size + 'px'
  });
};
