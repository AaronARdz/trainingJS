
function isPangram(pangram) {
    let pangrams = [];
    let hashAlph = {};
    let result = [];
    let counter = 0;
    
    pangram.forEach(element => {
        let pan = element.replace(/ /g, '')
        pan = pan.split("")
        pangrams.push(pan);
    });

    pangrams.forEach(element => {
        for (let value of element) {
            if (!hashAlph[value]) {
                hashAlph[value] = true;
                counter++;
            }
        }
        if (counter > 25) {
            result.push(1);
        } else {
            result.push(0);     
        }
        hashAlph = {};
        counter = 0;
    })
    console.log(result)
    return result;
}


const xd = ["we promptly judged antique ivory buckles for the next prize",
 "we promptly judged antique ivory buckles for the prizes",
  "the quick brown fox jumps over the lazy dog", 
"the quick brown fox jump over the lazy dog" ]

isPangram(xd)
