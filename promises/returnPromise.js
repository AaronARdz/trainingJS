let p = Promise.resolve(1500);

p.then( function(v) {
    console.log(v);

    // Create a promise and return it
    return new Promise(function(resolve, reject) {
        // fulfill with value
        // introduce asyncrony
        setTimeout( function() {
            // fulfill with value
            resolve(v*2);
        }, 2000);
    });
})
.then( function fulfilled(v) {
    console.log(v, 'fullfiled');
}, function rejected(v) {
    console.log(v, 'rejected');
}
)