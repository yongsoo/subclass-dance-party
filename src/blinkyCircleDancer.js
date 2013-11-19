var BlinkyCircleDancer = function(top, left, timeBetweenSteps, className){
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps, className);
};

BlinkyCircleDancer.prototype = Object.create(Dancer.prototype);
BlinkyCircleDancer.prototype.constructor = BlinkyCircleDancer;
BlinkyCircleDancer.prototype.step = function () {
  var size = this.randomSize();
  this.oldStep();
  this.$node.css({
    'background-color' : 'black',
    'width' : size + 'px',
    'height' : size + 'px'
  });
};
