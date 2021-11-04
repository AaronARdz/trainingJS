
const arr1 = [3, 4, 9, 9, 17, 20];
const arr2 = [8, 9, 40, 41];

const xd = [14, 17, 18, 21, 22, 26]
const xd2 = [3, 15, 30, 31]

function sortArreglos(arr1,arr2) {
    const result = []; // 0(n)
    let totalArray =  new Array(...arr1, ...arr2);
    const lengthArray = totalArray.length

    for (let i = 0; i < lengthArray; i++) { //O(n)
        const min = Math.min(...totalArray)
        let index = totalArray.indexOf(min);
        totalArray.splice(index,1) //O(n)
        result.push(min);
    }
    console.log(result)
    return result;
}

sortArreglos(xd, xd2);