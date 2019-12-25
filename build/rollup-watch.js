const rollup = require('rollup')
const inputOptions = require('./rollup-input-options')()
const outputOptions = require('./rollup-output-options')()
const watchOptions = require('./rollup-watch-options')

const options = {
  ...inputOptions,
  output: outputOptions,
  watchOptions,
} // 生成rollup的options

const watcher = rollup.watch(options) // 调用rollup的api启动监听

watcher.on('event', event => {
  const code = event.code
  
  // 监听到文件改变
  if (code === 'START') {
    console.groupEnd();
    console.group('监听到文件开始变化： ' + new Date().toLocaleTimeString())
  }

  console.log('重新打包中...', event.code)

  // 该次rebundle over
  if (code === 'END') {
    console.group('rebundle over： ' + new Date().toLocaleTimeString())
    console.groupEnd();
    process.stdout.write('     \r\n');
  }

  if (code === 'ERROR') {
    console.warn(event)
  }
}) // 处理监听事件

// watcher.close() // 手动关闭监听
