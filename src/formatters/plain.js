/* import _ from 'lodash';

const prepareValue = (nodeValue) => {
  if (_.isObject(nodeValue)) {
    return '[complex value]';
  }
  return typeof nodeValue === 'string' ? `'${nodeValue}'` : nodeValue;
};

const formatPlain = (data, path = '') => {
  const result = data
    .filter((node) => node.type !== 'unchanged')
    .map((node) => {
      const currentPath = path === '' ? node.key : `${path}.${node.key}`;
      switch (node.type) {
        case 'deleted':
          return `Property '${currentPath}' was removed`;
        case 'added': {
          return `Property '${currentPath}' was added with value: ${prepareValue(node.value)}`;
        }
        case 'changed': {
          const oldValue = prepareValue(node.value.valueRemoved);
          const newValue = prepareValue(node.value.valueAdded);
          return `Property '${currentPath}' was updated. From ${oldValue} to ${newValue}`;
        }
        case 'nested':
          return formatPlain(node.children, currentPath);
        default:
          throw new Error('Unknown type!');
      }
    });
  return result.join('\n');
};

export default formatPlain;
*/
