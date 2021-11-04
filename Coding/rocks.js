
function gemstones(rocks) {
    let hashAlph = {};
    let rockArray = []
    let counter = 0;
    
    rocks.forEach(element => {
        let pan = element.split("")
        pan = [...new Set(pan)];
        console.log(pan)
        rockArray.push(pan);
    });
    rockArray.forEach((element) => {
        for (let value of element) {
            if (!hashAlph[value]) {
                hashAlph[value] = 1;
            } else {
                hashAlph[value] += 1;
            }
        }
    })

    Object.keys(hashAlph).forEach(key => {
        if (hashAlph[key] >= rocks.length) {
            counter++;
        }
    });
    return counter;
}

const xd = ['abcdde', 'baccd', 'eeabg'];
gemstones(xd)