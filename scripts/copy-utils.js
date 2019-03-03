const fs = require('fs-extra');
const { join } = require('path');

const src = join(__dirname, '../src');
const utils = join(src, 'utils');
const DIRS = ['outlined', 'twotone'];

DIRS.forEach(name => {
  fs.copySync(utils, join(src, name, 'utils'));
});
