import formatPlain from './plain.js';
import formatStylish from './stylish.js';
import formatJson from './json.js'


const formatters = {
  plain: formatPlain,
  stylish: formatStylish,
  json: formatJson,
};

export default (data, format) => formatters[format](data);
