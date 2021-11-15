function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        // set current index as minimum
        let min = i;
        let temp = arr[i];
        for (let j = i+1; j < arr.length; j++) {
            // update index if current is lower 
            // than previously
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        console.log(min)
        arr[i] = arr[min];
        arr[min] = temp;
    }
    console.log(arr)
}

const numbers = [99,44,6,2,1,5,63,87,297,4,0];

selectionSort(numbers)