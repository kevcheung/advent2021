// As the submarine drops below the surface of the ocean, it automatically performs a sonar sweep of the nearby sea floor. On a small screen, the sonar sweep report (your puzzle input) appears: each line is a measurement of the sea floor depth as the sweep looks further and further away from the submarine.

// For example, suppose you had the following report:

// 199
// 200
// 208
// 210
// 200
// 207
// 240
// 269
// 260
// 263

// This report indicates that, scanning outward from the submarine, the sonar sweep found depths of 199, 200, 208, 210, and so on.

// The first order of business is to figure out how quickly the depth increases, just so you know what you're dealing with - you never know if the keys will get carried into deeper water by an ocean current or a fish or something.

// To do this, count the number of times a depth measurement increases from the previous measurement. (There is no measurement before the first measurement.) In the example above, the changes are as follows:

// 199 (N/A - no previous measurement)
// 200 (increased)
// 208 (increased)
// 210 (increased)
// 200 (decreased)
// 207 (increased)
// 240 (increased)
// 269 (increased)
// 260 (decreased)
// 263 (increased)

// In this example, there are 7 measurements that are larger than the previous measurement.

// How many measurements are larger than the previous measurement?

// let array = Array.from(Array(20)).map(function(x, i){return x = Math.floor(Math.random() * 101)+ 199});


//PART 1

const {inputSplit} = require('./input.js');

sort = (arr) => {
    count = 0;
    for(let i = 0; i < arr.length; i++){
        if(i === 0){
            console.log(arr[i] + " " + "(N/A - no previous measurement)");
        }else if(arr[i] > arr[i - 1]){
            count++;
            console.log(arr[i] + " " + "(increased)");
        }else if(arr[i] < arr[i - 1]){
            console.log(arr[i] + " " + "(decreased)");
        }
    }
    console.log(`There are ${count} measurements that are larger than the previous measurement`);
}

// console.log(inputSplit);

// sort(inputSplit);

//PART 2

compareSum = (arr) => {
    sum1 = 0;
    sum2 = 0;
    larger = 0;
    // console.log(arr.length);
    for(let i = 0; i < arr.length; i++){
        sum1 = arr[i] + arr[i + 1] + arr[i + 2];
        sum2 = arr[i + 1] + arr[i + 2] + arr[i + 3];
        if(sum1 < sum2){
            larger++;
            sum1 === 0;
            sum2 === 0;
        }
    }
    console.log(`Increased count is ${larger}`);
}

// compareSum(inputSplit);