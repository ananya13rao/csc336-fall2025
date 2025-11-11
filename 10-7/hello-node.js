// to interact with the file system we have to start importing libraries 
const fs = require('fs'); // even works if you write let fs  - imports library using "CommonJS"

let programCount; // seeing howmnay times a file is opened 

try {
    let fileContents = fs.readFileSync
} catch(error) {
    console.log('Error happened! Probably because the file does not exist')
    fs.writeFileSync('program_count.txt', JSON.stringify(programCount)); // file writing func only wants to run strings 
}

fileContents

console.log ('hello node!'); 

let randomNumbers = []; 

//read 'randomNumbers.txt'
let fileContents = fs.readFileSync('./randomNumbers.txt'); 
console.log(fileContents); 

randomNumbers = JSON.parse(fileContents); 


for (i = 0; i<10; i++) {
    let rand = Math.random(); 
    randomNumbers[i] = rand; 
    console.log(randomNumbers[i]); 

}

let str = '';
for (let rand of randomNumbers) {
    str += rand + '/n'; 
}

fs.writeFileSync('randomNumbers.txt', str);

// json is to have a string based representation of data 
// key/value pairs. keys: strings, values: numbers, booleans, arrays, strings, objects