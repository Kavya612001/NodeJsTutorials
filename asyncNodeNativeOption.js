// async
const {readFile, writeFile} = require('fs').promises;

// promisify is a builtin fn present in the utils package, it returns a promise as a response
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);





const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result-mind-gernade.txt', `This is awesome!!`, {flag: 'a'});
        console.log(first, second);

    } catch(err) {
        console.log(err);
    }
};

start();

