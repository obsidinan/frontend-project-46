import path from 'path';
import { readFileSync } from 'node:fs';
import parse from './parsers.js';
import compare from './compare.js';

const getExt = (filename) => path.extname(filename).slice(1);

const getPath = (filepath) => path.resolve(process.cwd(), filepath);

const readFile = (filepath) => readFileSync(filepath, 'utf8');

const getData = (filepath) => parse(readFile(getPath(filepath)), getExt(filepath));

const getDiff = (filepath1, filepath2) => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);

  return compare(data1, data2);
};

export default getDiff;
