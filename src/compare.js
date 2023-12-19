import _ from 'lodash';

const types = {
  added: '  + ',
  removed: '  - ',
  unchanged: '    '
};

export default (data1, data2) => {
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);

  const sortedUnionKeys = _.sortBy(_.union(keys1, keys2));

  const diffArray = sortedUnionKeys.map((key) => {
    if (!_.has(data1, key)) {
      return `${types.added}${key}: ${data2[key]}`;
    }
    if (!_.has(data2, key)) {
      return `${types.removed}${key}: ${data1[key]}`;
    }
    if (data1[key] === data2[key]) {
      return `${types.unchanged}${key}: ${data1[key]}`;
    }
    return `${types.removed}${key}: ${data1[key]}\n${types.added}${key}: ${data2[key]}`;
  });

  const result = ['{', ...diffArray, '}'];

  return result.join('\n');
};
