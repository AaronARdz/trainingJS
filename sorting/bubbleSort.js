

function bubble(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (arr[j] > arr[j+1]) {
                //swap
                let temp = arr[j];
                console.log(temp)
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
    return arr;
}

const numbers = [99,44,6,2,1,5,63,87,297,4,0];

bubble(numbers)