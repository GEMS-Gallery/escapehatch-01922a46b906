const { exec } = require('child_process');

exec('bash create-html.sh', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing script: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Script error output: ${stderr}`);
        return;
    }
    console.log(`Script output: ${stdout}`);
});
