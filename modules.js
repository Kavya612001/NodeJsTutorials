// Modules

// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./names');
const sayHi = require('./utils');
const data = require('./alternative');
require('./mindGrenade');

sayHi("Kavya");
sayHi(names.john);
sayHi(names.peter);

console.log(names);
//console.log(module);

console.log(data);
console.log(data.items);
console.log(data.singlePerson.name);