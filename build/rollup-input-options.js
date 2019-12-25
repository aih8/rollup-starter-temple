const json = require('@rollup/plugin-json')
const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const buble = require('@rollup/plugin-buble')
const uglify = require('rollup-plugin-uglify').uglify
const serve = require('rollup-plugin-serve')
const livereload = require('rollup-plugin-livereload')
const ts = require('@rollup/plugin-typescript')
const replace = require('@rollup/plugin-replace')
const alias = require('@rollup/plugin-alias')
const path = require("path")


const defalutInputOpt = {
  input: './src/index.ts',
  plugins: [
    alias({
      entries: [{
        find: 'environment',
        replacement: path.resolve(__dirname + '/../src/environment/index.ts')
      }]
    }),
    replace({
      __NODE_ENV__: process.env.NODE_ENV,
      exclude: 'node_modules/**' // 排除node_modules
    }),
    json(),
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules' // 仅处理node_modules内的库
      }
    }),
    ts({
      module: 'CommonJS'
    }),
    buble({
      exclude: 'node_modules/**' // 排除node_modules
    }),
    commonjs({extensions: ['.js', '.ts']}),
  ]
}

module.exports = (isProd = false) => {
  const plugins = defalutInputOpt.plugins;
  if (isProd) {
    plugins.push(
      uglify() // 代码压缩
    )
  } else {
    plugins.push(
      serve({
        contentBase: 'demo',
        port: 8081
      }),
      livereload({
        watch: 'demo'
      })
    )
  }

  return defalutInputOpt;
}
