let uno = [ 1, 3, 5 ];
let dos = [ 194, 54, 23, 7, 3, 6, 8 ];
let tres = [44, 37, 30, 23 ];
let cuatro = [ -2.3, -1.1, 0.1, 1.3, 2.5, 3.7 ]
let cinco = [ 1, 8 ];
let seis = [ 3, 2, 1, 2, 3, 4, 3];

function consecutiveNumbers(arr) {
    let start = arr[0] - arr[1];
    start = Math.abs(start);
    if (!Number.isInteger(start)) {
        start = Number((start).toFixed(1));
    }
    let isValid = false
    for (let i = 1; i < arr.length -1; i++) {
        let newDiff = Math.abs(arr[i] - arr[i+1]);
        if (!Number.isInteger(newDiff)) {
            newDiff = Number((newDiff).toFixed(1));
        }
        if (newDiff !== start) {
            return isValid;
        }
    }
    isValid = true;
    return isValid;
}

const xd =  consecutiveNumbers(dos)
console.log(xd)