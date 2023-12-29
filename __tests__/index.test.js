import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'node:fs';
import getDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

let result;
beforeEach(() => {
  result = readFileSync(getFixturePath('result-stylish.txt'), 'utf8');
});

test('format: stylish, ext: json', () => {
  const filename1 = getFixturePath('file1.json');
  const filename2 = getFixturePath('file2.json');
  expect(getDiff(filename1, filename2)).toEqual(result);
});

test('format: stylish, ext: yaml', () => {
  const filename1 = getFixturePath('file1.yml');
  const filename2 = getFixturePath('file2.yml');
  expect(getDiff(filename1, filename2)).toEqual(result);
});
// const resultPlain = readFileSync(getFixturePath('result-plain.txt'), 'utf8');
// const resultJSON = readFileSync(getFixturePath('result-json.txt'), 'utf8');

/*
test('format: plain, ext: json', () => {
  const filename1 = getFixturePath('file1.json');
  const filename2 = getFixturePath('file2.json');
  expect(getDiff(filename1, filename2, 'plain')).toEqual(resultPlain);
});

test('format: json, ext: yml', () => {
  const filename1 = getFixturePath('file1.json');
  const filename2 = getFixturePath('file2.json');
  expect(getDiff(filename1, filename2, 'json')).toEqual(resultJSON);
});
*/
