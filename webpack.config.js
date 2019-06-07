const path = require('path');
const publicPath = path.join(__dirname, 'client', 'public');

module.exports = {
  entry: './client/src/index.js',
  output: {
    filename: 'bundle.js',
    path: publicPath
  },
  mode:'development'
}