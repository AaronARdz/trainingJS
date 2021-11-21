let nums = [2,8,11,15,3,5,1];

function twoSum(nums, target) {
    let hashmap = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        if (hashmap[complement]) {
            return [i, hashmap[complement]]
        }
        hashmap[nums[i]] = i;
    }
}

const xd = twoSum(nums, 9);

console.log(xd)