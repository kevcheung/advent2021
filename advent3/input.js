const fs = require('fs');
const inputText = fs.readFileSync('./input.txt','utf-8');
const inputSplit = inputText
                        .split(/\r|\n|\r\n/) //[ '0101010101000' , '001010101001001']
                        .map((value) => value.split('')) //['0', '1', '0', '1', .....], ['0', '0', '1', '0', .....]
// console.log(inputText)
// console.log(inputSplit);

module.exports = {
    inputSplit
};