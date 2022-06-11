function *foo() {
  let x = yield 2;
  z++;
  let y = yield (x * z);
  console.log(x,y,z);
}

let z = 1;

let it1 = foo();
let it2 = foo();

let val1 = it1.next().value; // val1 = 2
let val2 = it2.next().value; // val2 = 2

val1 = it1.next( val2 * 10).value; // val1 40 <--x:20, z 2
val2 = it2.next( val1 * 5).value; // val2 600 <--x:200, z 3

it1.next(val2/2);
it2.next(val1/4);


