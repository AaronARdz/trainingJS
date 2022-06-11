let gimmesomething = (function() {
  let nextVal;

  return function(){
    if (nextVal === undefined) {
      nextVal = 1;
    } else {
      nextVal = (3 * nextVal) + 6;
    }
    console.log(nextVal);
    return nextVal;
  };
})();

gimmesomething();
gimmesomething();
gimmesomething()
gimmesomething();