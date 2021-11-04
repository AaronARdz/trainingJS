function oddNumbers(l,r) {
    let result = [];

    for (let i = l; i <= r; i++) {
        if (i % 2 !== 0) {
            result.push(i);
        }
    }
    return result;
}

const xd = oddNumbers(3,9)
console.log(xd)