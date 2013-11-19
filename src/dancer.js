var Dancer = function(top, left, timeBetweenSteps){
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
};

Dancer.prototype.$node = $('<span class="dancer"></span>');

Dancer.prototype.step = function () {
  var that = this;

  setTimeout(function() {
    that.step();
  }, that.timeBetweenSteps);
};

Dancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};