var webpack = require('webpack');
var base = require('./config/base.js');

// Vue config
var vue = base({
  entry: { web: ['./src/weex-render.js', './src/entry.js'] },
  sourceMap: true,
  chunk: true
});

if (process.env.NODE_ENV !== 'production') {
  vue.add('plugin.Provide', new webpack.ProvidePlugin({
    Vue: 'vue/dist/vue.runtime.js'
  }));
}
vue = vue.resolve()

// Weex config
var weex = base({
  entry: { weex: './src/entry.js' },
  template: false,
  devServer: false,
  externals: {
    'vue': 'Vue',
    'weex-vue-render': 'weexVueRenderer'
  }
});

weex.add('loader.vue.loaders', ['weex-loader']);
delete weex.config.vue.loaders;
weex = weex.resolve();

module.exports = [vue, weex];
