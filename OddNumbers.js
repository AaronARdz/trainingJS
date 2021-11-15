

function loopp(l,r) {
    if (l == 0) {
        return false;
    }

    for (let i = l; i <= r; i++) {
        console.log(i);
        let res = i % 2
        if (res > 0) {
            console.log()
        }

    }

}

loopp(120);


// let result = 5 / 2;
// console.log(result)

// result = 15 % 2;
// console.log(result)

// result = 5 + 2;
// console.log(result)

// result = 5 * 2;
// console.log(result)


let stringvariable = 'hola chavoruco';
let numbervar = 12;
let array = [1,3,5,6,89,2,3,10,12,15,123];


function xdd(arr) {

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i], i);
    }
}

xdd(array)