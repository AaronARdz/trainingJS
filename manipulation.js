function arrayManipulation(n, queries) {
    const numberlist = { };
    let greatest = 0;
    let current = 0;

    queries.forEach(([start, end, value]) => {
        numberlist[start] = (numberlist[start] || 0) + value;
        numberlist[end+1] =  (numberlist[end+1] || 0) - value;
    })
    console.log(numberlist)
    for (let value of Object.keys(numberlist)) {
        current += numberlist[value];
        greatest = Math.max(greatest, current);
    }
    console.log(greatest)
    return greatest
}

function arrayManipulationW(n, queries) {
    let numberlist = Array(n).fill(0);
    for (let i = 0; i<= queries.length - 1; i++) {
        for (let j = queries[i][0]; j <= queries[i][1]; j++) {
            numberlist[j-1] += queries[i][2];
            console.log(numberlist)
        }
    }
    return Math.max(...numberlist);
}

let ene = 10;
let queries = [[2,6,8], [3,5,7], [1,8,1], [5,9,15]];
let xd = [[1,5,3],
[4, 8, 7],
[6, 9 ,1]]

const resultt = arrayManipulation(ene,queries)

console.log(resultt)