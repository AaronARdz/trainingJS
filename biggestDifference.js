const arre = [4, 5, 2, 4, 5, 9, 9, 4, 4];
const uno =  [ 1, 1, 4 ];

const dos = [ 9, 8 ];
const arredos = [ 28, 16, 28, 11, 14, 26, 23, 25, 17, 3, 22, 23, 23, 10 ];
const tres =  [ 6, 22, 16, 29, 23 ];
let arrss = [1, 2, 90, 10, 110];




function biggestDifference(arr) {
    if (arr.length < 2) {
        return false;
    }
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let diff = max - min;
    return diff;
}

const xd = biggestDifference(arredos);
console.log(xd)