// error first
function foo(cb) {
    setTimeout( function() {
        try {
            let x = baz.bar();
            cb(null,x); // success
        }
        catch(err) {
            cb(err);
        }
    }, 100);
}

foo( function(err, val) {
    if (err) {
        console.error(err); // bummer 
    }
    else {
        console.log(val);
    }
});

// end the chain of promises with a final catch()
let p = Promise.resolve(42);

p.then(
    function fulfilled(msg) {
        console.log(msg.toLowerCase());
    }
)
.catch( function(err) {
    console.log('error', err);
});

// defer 
let g = Promise.resolve(42).defer()

g.then(
    function fulfilled(msg) {
        console.log(msg.toLowerCase());
    }
)
.catch( function(err) {
    console.log('error', err);
});
