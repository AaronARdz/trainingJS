// looks good when nearly sorted

const numbers = [99,44,6,2,1,5,63,87,283,4,0];

function insertionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            const xd = array.splice(i, 1)[0]
            console.log(xd);
            array.unshift(xd);
        } else {
            for (let j = 1; j < i; j++) {
                if (array[i] > array[j-1] && array[i] < array[j]) {
                    let jeje = array.splice(i, 1)[0];
                    array.splice(j, 0,jeje)
                }
            }
        }
    }
    return array;
}

insertionSort(numbers)