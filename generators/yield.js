let x = 1;

function *foo() {
  x++;
  yield; //indicate pause
  console.log('X: ' + x);
}

function bar() {
  x++;
}

let it = foo();
it.next();
console.log(x);
bar();
console.log(x);
it.next();

function *multiplyGen(z,y){
  return z * y;
}

let itera = multiplyGen(2,5);

let res = itera.next();

console.log(res)