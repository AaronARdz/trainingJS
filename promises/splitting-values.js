function getY(x) {
    return new Promise( function(resolve, reject){
        setTimeout( function() {
            resolve((3 * x) - 1);
        }, 100);
    });
}

function foo(bar, baz) {
    let x =  bar * baz;

    return getY(x)
    .then( function(y) {
        // wrap both values into a container
        return [x,y];
    });
}


foo(10, 20)
.then( function(msgs) {
    let x = msgs[0];
    let y = msgs[1];

    console.log(x, y);
});


// rearrange what foo returns
function jeje(bar, baz) {
    let x =  bar * baz;

    // return both promises
    return [
        Promise.resolve(x),
        getY(x)
    ]
}

Promise.all(jeje(10, 20))
.then( function(msgs) {
    let x = msgs[0];
    let y = msgs[1];

    console.log(x, y);
});


// spread arguments magic

function spread(fn) {
    return Function.apply.bind(fn, null);
}

Promise.all(
    jeje(100, 340)
)
.then(
    spread( function(x, y) {
        console.log(x, y);
    })
)

// Destructuring
Promise.all(
    jeje(50, 350)
)
.then( function(msgs) {
    let [x,y] = msgs;
    console.log(x, y)
})

// array parameter destructuring
Promise.all(
    jeje(50, 350)
)
.then( function([x, y]) {
    console.log(x, y)
})

