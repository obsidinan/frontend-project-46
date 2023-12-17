import path from 'path';
import { readFileSync } from 'node:fs';

const getPath = (filepath) => path.resolve(process.cwd(), filepath);

const getExt = (filename) => path.extname(filename).slice(1);

const readFile = (filepath) => readFileSync(filepath, 'utf8');

export { getPath, getExt, readFile };
