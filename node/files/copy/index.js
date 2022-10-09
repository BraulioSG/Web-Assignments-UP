const fs = require('fs');

try {
    fs.copyFileSync('text1.txt', 'text2.txt', fs.constants.COPYFILE_FICLONE);
} catch (e) {
    console.log(e);
}
