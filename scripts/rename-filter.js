const defaultFilter = require('build-react-icons/dist/utils/renameFilters/default').default;

exports.default = ({ base, ...rest }, ...args) => {
  return defaultFilter({ ...rest, base: base.replace('Svg', '') }, ...args);
}
