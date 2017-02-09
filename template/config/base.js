var resolve = require('path').resolve;
var webpack = require('webpack');
var cooking = require('cooking');

module.exports = function (config) {
  cooking.set(Object.assign({
    entry: {
      weex: './src/entry.js'
    },
    template: './index.tpl',
    devServer: {
      port: 8888,
      publicPath: '/'
    },
    dist: './dist',
    hash: true,
    postcss: require('./postcss.js'),
    publicPath: '/dist/',
    extractCSS: true,
    static: true,
    alias: {
      'vue$': 'vue/dist/vue.runtime.js',
      'src': resolve(__dirname, '../src'),
      'static': resolve(__dirname, '../static')
    },
    extends: ['vue2'<% if (js) { %>, '<%= js %>'<% } %>, 'lint'<% if (csstype) { %>, '<%= csstype %>'<% } %>]
  }, config));

  cooking.add('plugin.Banner', new webpack.BannerPlugin({
    banner: '// { "framework": "Vue" }\n',
    raw: true
  }));

  return cooking;
}
