const fs = require('fs');
const inputText = fs.readFileSync('./input.txt','utf-8');
const inputSplit = inputText
                        .split(/\r|\n|\r\n/)
                        .map((value) => parseInt(value));

// console.log(inputSplit);

module.exports = {
    inputSplit
};