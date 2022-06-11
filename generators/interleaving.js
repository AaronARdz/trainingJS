let a = 1;
let b = 1;

function *foo() {
  a++;
  yield;
  b = b * a;
  a = (yield b) + 3;
}

function *bar() {
  b--;
  yield;
  a = (yield 8) + b;
  b = a * (yield 2);
}

function step(gen) {
  let it = gen();
  let last;

  return function() {
    // whatever is yieled out, just sent it right back in the next time
    last = it.next(last).value;
  }
}

a = 1;
b = 2;
let s1 = step(foo);
let s2 = step(bar);

s1();
s1();
s1();

s2();
s2();
s2();
s2();

console.log(a, b)