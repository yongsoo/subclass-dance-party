var Dancer = function(top, left, timeBetweenSteps, className){
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $("<span class='dancer " + className + "'" + "></span>");
  this.step();

  this.setPosition = function (top, left) {
    var styleSettings = {
      top: top,
      left: left
    };

    this.$node.css(styleSettings);
  };

  this.setPosition(top, left);

};

Dancer.prototype.step = function () {
  var that = this;

  setTimeout(function() {
    that.step();
  }, that.timeBetweenSteps);
};

Dancer.prototype.randomAngle = function () {
  return Math.floor(Math.random() * 360);
};

Dancer.prototype.randomColor = function () {
  return Math.floor(Math.random() * 255);
};

Dancer.prototype.randomSize = function() {
  return Math.floor(Math.random() * 100);
};