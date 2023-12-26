import _ from 'lodash';

const compare = (data1, data2) => {
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);

  const sortedUnionKeys = _.sortBy(_.union(keys1, keys2));

  const diffArray = sortedUnionKeys.map((key) => {
    if (!_.has(data1, key)) {
      return {
        type: 'added',
        key,
        value: data2[key],
      };
    }
    if (!_.has(data2, key)) {
      return {
        type: 'removed',
        key,
        value: data1[key],
      };
    }
    if (data1[key] === data2[key]) {
      return {
        type: 'unchanged',
        key,
        value: data1[key],
      };
    }
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return {
        key,
        type: 'object',
        children: compare(data1[key], data2[key]),
      }
    }
    return {
      type: 'changed',
      key,
      valueRemoved: data1[key],
      valueAdded: data2[key],
    };
  });

  return diffArray;
};

export default compare;
