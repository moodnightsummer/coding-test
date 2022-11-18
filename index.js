import * as path from 'path';
import { exec } from 'child_process';
import * as fs from 'fs';

const absolutePath = path.join(process.cwd(), ...process.argv.slice(2, process.argv.length));

exec(`node ${absolutePath}`, (error, stdout) => {
    if (error) {
        console.error(error);
    } else {
        console.log(stdout);
    }
});
