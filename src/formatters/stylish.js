import _ from 'lodash';

const types = {
  added: '+',
  deleted: '-',
  unchanged: ' ',
  changed: ' ',
  nested: ' ',
};

const indent = (depth) => {
  const space = ' ';
  return space.repeat(depth * 4 - 2);
};

const stringify = (node, depth = 1) => {
  if (!_.isObject(node)) {
    return node;
  }
  const keys = Object.keys(node);
  const getKeys = keys.map(
    (key) => `${indent(depth + 1)}  ${key}: ${stringify(node[key], depth + 1)}`,
  );
  return `{\n${getKeys.join('\n')}\n  ${indent(depth)}}`;
};

const stylishFormatting = (node, depth = 1) => {
  switch (node.type) {
    case 'added':
    case 'deleted':
    case 'unchanged':
      return `${indent(depth)}${types[node.type]} ${node.key}: ${stringify(node.value, depth)}`;
    case 'changed':
      return `${indent(depth)}${types.deleted} ${node.key}: ${
        stringify(node.value.valueRemoved, depth)
      }\n${indent(depth)}${types.added} ${node.key}: ${stringify(node.value.valueAdded, depth)}`;
    case 'nested':
      return `${indent(depth)}${types[node.type]} ${node.key}: {\n${node.children
        .map((childrenValue) => stylishFormatting(childrenValue, depth + 1))
        .join('\n')}\n ${indent(depth)} }`;
    default:
      throw new Error(`Unknown type '${node.type}'!`);
  }
};

const genStylishFormatting = (comparedData) => `{\n${comparedData
  .map((string) => stylishFormatting(string, 1))
  .join('\n')}\n}`;

export default genStylishFormatting;
