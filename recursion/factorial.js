function findFactorialRecursive(number) {
    if (number < 1) {
        return 1;
    }
    return number * findFactorialRecursive(number - 1) ;
}

function findFactorialIterative(number) {
    let answer = 1;
    if (number === 2) {
        answer = 2;
    }
    for (let i = 2; i <= number; i++) {
        answer = answer * i;
    }
    return answer;
}


function fibonacciIterative(n) {
    let arr = [0,1];
    for (let i = 2; i < n +1; i++) {
        arr.push(arr[i-2] + arr[i-1]);
    }
    return arr[n];
}

function fibonacciRecursive(n) { //O(2^N)
    console.log(n)
    if (n < 2) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n -2);
}
const jeje  = fibonacciIterative(6)
console.log(jeje)