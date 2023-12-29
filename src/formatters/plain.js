import _ from 'lodash';

const prepareValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return typeof value === 'string' ? `'${value}'` : value;
};

const formatPlain = (data, path = []) => {
  const result = data
    .filter((item) => item.type !== 'unchanged')
    .map((item) => {
      const currentPath = path.concat(item.key);
      const fullPath = currentPath.join('.');
      switch (item.type) {
        case 'removed':
          return `Property '${fullPath}' was removed`;
        case 'added': {
          const currentValue = prepareValue(item.value);
          return `Property '${fullPath}' was added with value: ${currentValue}`;
        }
        case 'changed': {
          const oldValue = prepareValue(item.valueRemoved);
          const newValue = prepareValue(item.valueAdded);
          return `Property '${fullPath}' was updated. From ${oldValue} to ${newValue}`;
        }
        case 'hasChildren':
          return formatPlain(item.children, currentPath);
        default:
          throw new Error('Unknown type!');
      }
    });
  return result.join('\n');
};

export default formatPlain;
