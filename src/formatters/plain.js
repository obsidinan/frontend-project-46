import _ from 'lodash';

const prepareValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return typeof value === 'string' ? `'${value}'` : value;
};

const formatPlain = (data, path = []) => {
  const result = data.map((item) => {
      const currentPath = path.concat(item.key);
      const fullPath = currentPath.join('.');
      switch (item.type) {
        case 'deleted':
          return `Property '${fullPath}' was removed`;
        case 'added': {
          const currentValue = prepareValue(item.value);
          return `Property '${fullPath}' was added with value: ${currentValue}`;
        }
        case 'changed': {
          const oldValue = prepareValue(item.value.valueRemoved);
          const newValue = prepareValue(item.value.valueAdded);
          return `Property '${fullPath}' was updated. From ${oldValue} to ${newValue}`;
        }
        case 'nested':
          return formatPlain(item.children, currentPath);
        case 'unchanged':
          return '';
        default:
          throw new Error('Unknown type!');
      }
    });
  return result.filter((outputLine) => outputLine.length > 0).join('\n');
};

export default formatPlain;
