import _ from 'lodash';

const types = {
  added: '+',
  removed: '-',
  unchanged: ' ',
  changed: ' ',
};

const indent = (depth) => {
  const space = ' ';
  return space.repeat(depth * 4 - 2);
}

const stringify = (comparedData, depth = 1) => {
  const result = comparedData.map((string) => {
    switch (string.type) {
      case 'added':
      case 'removed':
      case 'unchanged':
        return `${indent(depth)}${types[string.type]} ${string.key}: ${string.value}`;
      case 'changed':
        return `${indent(depth)}${types.removed} ${string.key}: ${
          string.valueRemoved
        }\n${indent(depth)}${types.added} ${string.key}: ${string.valueAdded}`;
    }
  });
  return `{\n${result.join('\n')}\n}`;
};

export default stringify;
