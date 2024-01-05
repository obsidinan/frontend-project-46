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

const formatters = [
  { formatter: 'stylish', expected: resultStylish },
  { formatter: 'plain', expected: resultPlain },
  { formatter: 'json', expected: resultJSON },
];

describe.each(formatters)(`test all formats and formatters`, ({ formatter, expected }) => {
  test.each(extensions)(`test ${formatter}`, (extension) => {
    const filename1 = getFixturePath(`file1${extension}`);
    const filename2 = getFixturePath(`file2${extension}`);
    const currentformat = genDiff(filename1, filename2, formatter);
    expect(currentformat).toEqual(expected);
  });
});
