import plain from './plain.js';
import stylish from './stylish.js';

const formatters = {
  plain,
  stylish,
};

export default (data, format) => formatters[format](data);
