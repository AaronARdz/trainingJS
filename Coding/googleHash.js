// Google question
// Given an array = [2,5,1,2,3,5,1,2,4];
// Return first recurring character
// It should return 2

const arr = [2,5,1,2,3,5,1,2,4];

function recurringCharacter(arr) {
    let numberlist = {};
    let recurring = false;

    for (let value of arr) {
        if (!numberlist[value]) {
            numberlist[value] = true;
        } else {
            recurring = value
            return recurring
        }
    }
    return recurring;
}

const xd = recurringCharacter(arr)
console.log(xd)