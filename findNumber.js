function findNumber(arr, k) {
    let response = 'NO';
    for (let i = 0; i< arr.length; i++) {
        if (arr[i] === k) {
            console.log(k,arr[i])
            response = 'YES';
            return response;
        }
    }
    return response;
}

const arr = [1,2,3,4,5];
const jeje = [2,4,1,6,7,8];
const k = 5;

const xd = findNumber(arr, 9)

console.log(xd)