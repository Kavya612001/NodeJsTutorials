// Global variables
/*

__dirname - path to current directory
__filename - filename
require - function to use modules (CommonJS)
module - info abt current module (file)
process - info abt the env where the program is being executed
*/

console.log(__dirname);
//console.log(process);
console.log(__filename);

setInterval(() => {
    console.log('Hello world')
}, 1000);