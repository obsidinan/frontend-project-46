import yaml from 'js-yaml';

const parse = (file, ext) => {
  const parsers = {
    yml: yaml.load,
    yaml: yaml.load,
    json: JSON.parse,
  };
  return parsers[ext](file);
};

export default parse;
