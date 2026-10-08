const fs = require('fs');
const path = require('path');

const logDir = path.join(process.cwd(), 'Logs');

if (fs.existsSync(logDir)) {
    const files = fs.readdirSync(logDir);

    files.forEach(file => {
        console.log(`Deleting: ${file}`);
        fs.unlinkSync(path.join(logDir, file));
    });



    fs.rmdirSync(logDir);
    console.log(`Logs directory removed.`);
} else {
    console.log(`Logs directory doesn't exist.`)
}