
Function.prototype.myBind(context) {
  var fn = this;
  function() {
    fn.apply(context);
  }
}
