let p = Promise.resolve(42)

let p2 = p.then( function(v) {
    console.log(v)
    return v * 2;
});

// chain off p2

p3 = p2.then( function(v) {
    console.log(v);

    return v * 2;
});

p3.then( function(v) {
    console.log(v);
})

// Chaining
let x = Promise.resolve(42)

x.then( function(v) {
    console.log(v)
    return v * 2;
})
.then( function(v) {
    console.log(v);

    return v * 2;
})
.then( function(v) {
    console.log(v);
})
