
let xd = [1,2,3,3,12,2,5,9,4, 14, 3, 5, 9]

function calculate(arr, size) {
  let sum = 0;
  let max = 0;
  let indexFrom = 0;
  let count = 0;

  for (let i = 0; i <= arr.length; i++) {
     sum += arr[i];
     count++;
     if (count === size) {
       console.log(count, 'count')
      if (sum > max) {
        console.log(sum, max)
        max = sum;
      }
      count--;
      sum = sum - arr[indexFrom];
      console.log('new sum', sum)
      indexFrom++;
     }
  }
  console.log(sum, max)
}


function calculateNumber(arr, number) {
  let sum = 0;
  let max = 0;
  let indexFrom = 0;

  for (let i = 0; i <= arr.length; i++) {
     if (sum === number) {
      console.log(indexFrom, i, sum, 'xdd')
        return [indexFrom, i];
     }
     sum += arr[i];
     if (sum > number) {
      
        sum = arr[i] + arr[i-1];
        indexFrom = i;
     }
    
  }
}
calculateNumber(xd, 14)