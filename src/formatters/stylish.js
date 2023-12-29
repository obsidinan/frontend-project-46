import _ from 'lodash';

const types = {
  added: '+',
  removed: '-',
  unchanged: ' ',
  changed: ' ',
  hasChildren: ' ',
};

const indent = (depth) => {
  const space = ' ';
  return space.repeat(depth * 4 - 2);
};

const stringify = (item, depth = 1) => {
  if (!_.isObject(item)) {
    return item;
  }
  const keys = Object.keys(item);
  const getKeys = keys.map(
    (key) => `${indent(depth + 1)}  ${key}: ${stringify(item[key], depth + 1)}`,
  );
  return `{\n${getKeys.join('\n')}\n  ${indent(depth)}}`;
};

const stylishFormatting = (string, depth = 1) => {
  switch (string.type) {
    case 'added':
    case 'removed':
    case 'unchanged':
      return `${indent(depth)}${types[string.type]} ${string.key}: ${stringify(string.value, depth)}`;
    case 'changed':
      return `${indent(depth)}${types.removed} ${string.key}: ${
        stringify(string.valueRemoved, depth)
      }\n${indent(depth)}${types.added} ${string.key}: ${stringify(string.valueAdded, depth)}`;
    case 'hasChildren':
      return `${indent(depth)}${types[string.type]} ${string.key}: {\n${string.children
        .map((childrenValue) => stylishFormatting(childrenValue, depth + 1))
        .join('\n')}\n ${indent(depth)} }`;
    default:
      throw new Error('Unknown type');
  }
};

export default (comparedData) => `{\n${comparedData
  .map((string) => stylishFormatting(string, 1))
  .join('\n')}\n}`;
