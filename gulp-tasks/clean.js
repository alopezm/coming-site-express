const del = require('del');

const cleanTask = () => del(['tmp', 'dist']);

module.exports = cleanTask;
