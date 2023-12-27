import path from 'path';
import { readFileSync } from 'node:fs';
import parse from './parsers.js';
import compare from './compare.js';
import formating from './formatters/index.js';

const getExt = (filename) => path.extname(filename).slice(1);

const getPath = (filepath) => path.resolve(process.cwd(), filepath);

const readFile = (filepath) => readFileSync(filepath, 'utf8');

const getData = (filepath) => parse(readFile(getPath(filepath)), getExt(filepath));

const getDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);

  return formating(compare(data1, data2), format);
};

const genDiff = (file1, file2, format = 'stylish') => {
  const filepath1 = getPath(file1);
  const filepath2 = getPath(file2);

  return getDiff(filepath1, filepath2, format);
};

export default genDiff;
