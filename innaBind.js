
Function.prototype.myBind = function(context) {
  var fn = this;
  var ff = function() {
    fn.apply(context);
  };
  return ff;
};



function Clock () {

	this.date = new Date();
	this.hours = this.date.getHours();
	this.minutes = this.date.getMinutes();
	this.seconds = this.date.getSeconds();

	setInterval(this._tick.myBind(this), 1000);

}

Clock.prototype.printTime = function () {
  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
};

Clock.prototype._tick = function () {
  this.seconds += 1;
  this.printTime();
};

var c = new Clock;
