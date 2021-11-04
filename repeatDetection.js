const arre = [4, 5, 2, 4, 5, 9, 9, 4, 4]

function repeatDetection(arreglo, number, times) {
    let counter = 0;
    let isValid = false;
    for (let value of arreglo) {
        if (value === number && counter <= times) {
            counter += 1;
        }
        if (counter === times) {
            return isValid = true
        }
    }
    return isValid;
}

function dowhile(numberlist, number,times) {
    let counter = 0;
    let i = 0;
    do {
        if (numberlist[i] === number){
            counter += 1;
        }
        i += 1;
    } while (counter <= times && i < numberlist.length);
    return counter >= times;
}

const contiene = dowhile(arre,9,3)
console.log(arre.length)

// O(!n) very expensive algorithm, always avoid, adds a loop for every element