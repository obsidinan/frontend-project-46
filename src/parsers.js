import yaml from 'js-yaml';

const parse = (data, ext) => {
  const parsers = {
    yml: yaml.load,
    yaml: yaml.load,
    json: JSON.parse,
  };
  return parsers[ext](data);
};

export default parse;
