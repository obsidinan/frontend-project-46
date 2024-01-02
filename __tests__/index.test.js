import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'node:fs';
import genDiff from '../src/index.js';

const extensions = ['.json', '.yml'];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const resultStylish = readFileSync(getFixturePath('result-stylish.txt'), 'utf8');
const resultPlain = readFileSync(getFixturePath('result-plain.txt'), 'utf8');
const resultJSON = readFileSync(getFixturePath('result-json.txt'), 'utf8');

test.each(extensions)('tests for different extentions of files', (extension) => {
  const filename1 = getFixturePath(`file1${extension}`);
  const filename2 = getFixturePath(`file2${extension}`);
  const currentStylish = genDiff(filename1, filename2, 'stylish');
  expect(currentStylish).toEqual(resultStylish);
  const currentDefault = genDiff(filename1, filename2);
  expect(currentDefault).toEqual(resultStylish);
  const currentPlain = genDiff(filename1, filename2, 'plain');
  expect(currentPlain).toEqual(resultPlain);
  const currentJSON = genDiff(filename1, filename2, 'json');
  expect(currentJSON).toEqual(resultJSON);
});
