
const arr1 = [3, 4, 9, 9, 17, 20];
const arr2 = [8, 9, 40, 41];
console.log(arr1)
console.log(arr2)

function sortArreglos(arr1,arr2) {
    const result = [];
    const length1 = arr1.length;
    const length2 = arr2.length;
    const lengthsum = length2 + length1;
    let mayorArr = []
    let minorArr = []

    if (length2 > length1 ) {
        mayorArr = arr2;
        minorArr = arr1
    } else {
        mayorArr = arr1;
        minorArr = arr2;
    }

    let counter = 0;
    let lowest = Math.min(mayorArr[0], minorArr[0]);
    let maxest = Math.max(mayorArr[0], minorArr[0]);

    for (let i = 0; i <= lengthsum; i++) {
        let next = mayorArr[i+1];
        if (maxest >= next) {
            result.push(next);
        } else if (next > minorArr[counter]) {
            console.log(minorArr[counter])
            result.push(maxest)
            counter++;
            maxest = minorArr[counter];
        }
        console.log(result)
    }
}

sortArreglos(arr1, arr2);