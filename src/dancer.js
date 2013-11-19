var Dancer = function(top, left, timeBetweenSteps, className){
  console.log(className);
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.$node = $("<span class='dancer " + className + "'" + "></span>");

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