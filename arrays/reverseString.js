const jeje = 'hola chavoruco soy goku';

function reverseString(string) {
    const item = string.split('');
    let result = '';
    console.log(item);
    for (let i = item.length - 1; i >= 0; i--) {
        result = result + item[i];
    }
    console.log(result);
    return result;
}

reverseString(jeje)