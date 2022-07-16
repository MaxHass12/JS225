const foo = function() {
  return function() {
    return 10;
  }();
}();

console.log(foo);