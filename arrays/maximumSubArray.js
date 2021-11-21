let nums = [-2,1,-3,4,-1,2,1,-5,4];

function maxSubarray(nums) {
    let maxSub = nums[0];
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (currentSum < 0) {
            currentSum = 0;
        }
        currentSum += nums[i];
        maxSub = Math.max(maxSub, currentSum)
    }
    console.log(maxSub)
    return maxSub;
}

maxSubarray(nums)