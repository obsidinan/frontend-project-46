import path from 'path';
import { readFileSync } from 'node:fs';
import parse from './parsers.js';
import compare from './compare.js';
import formatting from './formatters/index.js';

const getData = (filepath) => {
  const fileFullPath = path.resolve(process.cwd(), filepath);
  const fileExt = path.extname(filepath).slice(1);
  const fileContent = readFileSync(fileFullPath, 'utf8');

  return parse(fileContent, fileExt);
};

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);

  return formatting(compare(data1, data2), format);
};

export default genDiff;
