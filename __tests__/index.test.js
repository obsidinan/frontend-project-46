import { fileURLToPath } from 'url';
import { dirname, path } from 'path';
import { readFileSync } from 'node:fs';
import { getDiff } from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('json', () => {
  const filename1 = getFixturePath('file1.json');
  const filename2 = getFixturePath('file2.json');
  const result = readFileSync(getFixturePath('result.txt'), 'utf8');

  expect(getDiff(filename1, filename2)).toEqual(result);
});
