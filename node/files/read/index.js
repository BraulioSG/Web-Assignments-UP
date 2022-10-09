const fs = require('fs');

fs.readFile('./text1.txt', 'utf8', (err, data) => {
    console.log(err ? err : data);
});
