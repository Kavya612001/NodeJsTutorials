// destructuring 
const {readFileSync, writeFileSync} = require('fs');

console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');


console.log(first, second);


// if the file is not there,node will create a new file or  node will override the file if its already present

// flag (a) - append

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'});

console.log('done with the task');
console.log('starting the next task');