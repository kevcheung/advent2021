const fs = require('fs');
const inputText = fs.readFileSync('./input.txt','utf-8');
const inputSplit = inputText
                        .split(/\r|\n|\r\n/) //[ 'commmand #' , 'command #']
                        .map((value) => (value.split(' ')));// [['command', '#'], ['command', '#']]

// console.log(inputSplit);

module.exports = {
    inputSplit
};