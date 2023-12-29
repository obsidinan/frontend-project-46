import _ from 'lodash';

const compare = (data1, data2) => {
  const sortedUnionKeys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));

  const diffArray = sortedUnionKeys.map((key) => {
    if (!_.has(data1, key)) {
      return { type: 'added', key, value: data2[key] };
    }
    if (!_.has(data2, key)) {
      return { type: 'deleted', key, value: data1[key] };
    }
    if (data1[key] === data2[key]) {
      return { type: 'unchanged', key, value: data1[key] };
    }
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { key, type: 'nested', children: compare(data1[key], data2[key]) };
    }
    return {
      type: 'changed',
      key,
      value: {
        valueRemoved: data1[key],
        valueAdded: data2[key],
      },
    };
  });

  return diffArray;
};

export default compare;
