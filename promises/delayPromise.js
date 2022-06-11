function delay(time) {
    return new Promise( function(resolve, reject) {
        setTimeout(resolve, time);
    });
}

delay(100)
.then( function step2() {
    console.log("step2 (after 100ms)" );
    return delay(200);
})
.then( function step3() {
    console.log("step3 (after 200ms)" );
})
.then( function step4() {
    console.log("step4 (next job)" );
    return delay(500);
})
.then( function step5() {
    console.log("step5 (after another 50ms)" );
})
