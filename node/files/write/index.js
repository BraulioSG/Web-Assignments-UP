const fs = require('fs');

fs.writeFile('./helloworld.txt', 'hello there', (err) => {
    if (err) console.log(err);
});
