const path    = require('path');
const webpack = require('webpack');
const vendorPath ='../dist/vendor'
module.exports = {
  entry: {
    vendor: ['jquery','vue','vuex','vue-router','element-UI','axios']
  },
  output: {
    path: path.join(__dirname, vendorPath),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, vendorPath, '[name]-manifest.json'),
      name: '[name]_library'
    })
  ]
};
