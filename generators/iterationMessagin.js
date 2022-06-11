function *foo(x) {
  let y = x * (yield)
  return y;
}

let it = foo(6);

it.next();

let res = it.next(7);

console.log(res.value);

function *bar(x) {
  let y = x * (yield "hello");
  return y;
}

let ite = bar(6);

let rese = ite.next();
console.log(rese);

rese = ite.next(34);

console.log(rese.value);