const helDevUtils = require('hel-dev-utils');
const pkg = require('../package.json');

const appInfo = helDevUtils.createReactSubApp(pkg);

module.exports = appInfo;
