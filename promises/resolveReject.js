let rejectedPr = new Promise ( function(resolve,reject) {
    // resolve this primise with a rejected promise
    resolve( Promise.reject( "Ooops"));
});

rejectedPr.then(
    function fullfilled() {
        // never gets here
    },
    function rejected(err) {
        console.log(err); 
    }
)