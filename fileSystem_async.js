const {readFile, writeFile} = require('fs');

// using callbacks (callback - hell)
console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return;
    } else {
        const first = result;
        readFile('./content/second.txt', 'utf8', (err, result) => {
            if(err) {
                console.log(err)
                return;
            } else {
                const second = result;
                writeFile('./content/result-async.txt', 'New text added to the file', (err, result) => {
                    if(err) {
                        console.log(er)
                        return;
                    } else {
                        console.log('done with this task');
                    }
                });
            }
        })
    }
});
console.log('starting the next task');