const nemo = ['nemo'];

const large = new Array(100000).fill('nemo');

function findNemo(arr) {
    let t0 = process.uptime();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'nemo') {
            console.log('found NEMO!');
            break;
        }
    }
    let t1 = process.uptime();
    console.log('Call to find nemo took ' + (t1-t0) + ' seconds');
}

const boxes = ['a','b','c','d','e']

function logFirstBoxes(boxes) {
    console.log(boxes[0]); //0(1)
    console.log(boxes[1]); //0(1)
}

// The function is 0(2), but its still 0(1) because is constant time
// very nice


function funChallenge(input) {
    let a = 10; //0(1)
    a = 50 + 3; //0(1)
  
    for (let i = 0; i < input.length; i++) { //0(n)
      anotherFunction(); //0(n)
      let stranger = true; //0(n)
      a++; //0(n)
    }
    return a; //0(1)
  }

// the funtion has 3 + n + n + n + n
// BIG O(3 + 4n)
// Simplified to BIG 0(n)

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
    let a = 5; //0(1)
    let b = 10; //0(1)
    let c = 50; //0(1)
    for (let i = 0; i < input; i++) { //0(n)
      let x = i + 1;
      let y = i + 2;
      let z = i + 3;
  
    }
    for (let j = 0; j < input; j++) { //0(n)
      let p = j * 2;
      let q = j * 2;
    }
    let whoAmI = "I don't know";
  }

// BIG O(4 + 7n)

function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(element => {
        console.log(element)
    });

    boxes2.forEach(element => {
        console.log(element)
    });
}

// RULE 3
//BIG O (a + b)

function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j])
        }
    }
}

logAllPairsOfArray(boxes)