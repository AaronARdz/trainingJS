

let jeje = [1,2,3,4,5,6,7]; 
let k = 3;

function rotateArray(nums, k) {
    let start = nums.length - k;
    let result = [];
    for (let i = start; i < nums.length; i++) {
        result.push(nums[i]);
    }
    for (let j = 0; j <= start; j++) {
        result.push(nums[j]);
    }
    console.log(result)
}

rotateArray(jeje, k)