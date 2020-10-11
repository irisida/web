/*
  helper function for clearer
  base path inclusion
*/
const path = require('path');

module.exports = path.dirname(require.main.filename);
