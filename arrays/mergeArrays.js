

function mergeArrays(array1, array2) {
    const merged = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    if (array1.length === 0) {
        return array2;
    }

    if (array2.length === 0) {
        return array1;
    }

    while (array1Item || array2Item) {
        console.log(array1Item, array2Item)
        if (!array2Item || array1Item < array2Item) {
            merged.push(array1Item);
            array1Item = array1[i];
            i++;
        }
        else {
            merged.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    console.log(merged)
}

const arr1 = [3, 4, 9, 9, 17, 20];
const arr2 = [8, 9, 40, 41];

const xd = [14, 17, 18, 21, 22, 26]
const xd2 = [3, 15, 30, 31]

const jeje = [0,3,4];
const jeje2 = [4,6,30]


mergeArrays(jeje, jeje2)