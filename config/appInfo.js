const helDevUtils = require('hel-dev-utils');
const unpkg = require('../package.json');

const appInfo = helDevUtils.createReactSubApp(unpkg);

module.exports = appInfo;
