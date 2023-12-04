import { existsSync, readFileSync } from 'fs';
import path from 'path';

const ERROR_INVALID_COMMAND = `
Command format incorrect.

Please use:
  npm start -- <PUZZLE_NUMBER>
`;

const ERROR_DOES_NOT_EXIST = `
The solution for this problem does not exist yet.
`;

process.on('exit', (code: number) => {
    if (code === 1) console.log(ERROR_INVALID_COMMAND);
    if (code === 2) console.log(ERROR_DOES_NOT_EXIST);
});

// Check if the correct arguments are being passed.
if(process.argv.length !== 3 || Number.isNaN(Number(process.argv[2])))
  process.exit(1);

const dir = path.join(__dirname, process.argv[2]);

if (!existsSync(dir)) process.exit(2);

import(path.join(dir, 'main.ts')).then(module => {
  const data = readFileSync(path.join(dir, 'data.txt')).toString();
  if ('parse' in module){
    module.main(module.parse(data));
  }
  else {
    module.main(data);
  }
})
