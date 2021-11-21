let nums = [0,1,0,3,12];

function moveZeroes(nums) {
    let result = [];
    let zeroArray = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            result.push(nums[i])
        } else {
            zeroArray.push(nums[i]);
        }
    }
    result = [...result,...zeroArray]

    console.log(result);
}

moveZeroes(nums)