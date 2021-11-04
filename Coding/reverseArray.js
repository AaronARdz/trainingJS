function reverseArray(a) {
    let result = [];
    for (let i = a.length - 1 ; i >= 0; i--) {
        result.push(a[i]);
    }
    return result;
}

const xdd = [3, 4, 9, 9, 17, 20];

const jeje = reverseArray(xdd);
console.log(jeje)

