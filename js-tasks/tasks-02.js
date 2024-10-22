// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string){
    const stringArr = string.split(" ");
    return stringArr;
}

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function(list){
    list.sort((a, b) => a - b);
    return list[0];
}

var max = function(list){
    list.sort((a, b) => b - a);
    return list[0];
}

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
    let smallestValue = arr[0];
    let smallestIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallestValue) {
            smallestValue = arr[i];
            smallestIndex = i;
        }
    }

    return toReturn === "value" ? smallestValue : smallestIndex;
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
    let rna = '';

    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'T') {
            rna += 'U';
        } else {
            rna += dna[i];
        }
    }

    return rna;
}