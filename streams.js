const {createReadStream} = require('fs');

//  stream is used to store large content that cant be stored in a string
 const stream = createReadStream('./content/big.txt', {higerWaterMark: 900000, encoding: 'utf8' });

 stream.on('data', (result)=> {
    console.log(result)
 });

//  default - 64kb
// last buffer - remainder
// higerWaterTank - control size


stream.on('error', (err) => console.log(err))