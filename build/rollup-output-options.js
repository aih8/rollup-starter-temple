const pkg = require('../package.json')

/**
 * @param isProd boolean 是否是生产模式
 */
module.exports = (isProd = false) => {
    // js挂载在window上的全局变量
    const jsGlobalName = pkg.jsGlobalName;

    if (isProd) {
        return [{
            file: `./dist/entry.${pkg.version}.min.js`,
            format: 'umd',
            name: jsGlobalName,
            sourcemap: true,
            noConflict: true // 全局变量已经挂载的，不再重复执行
        }, {
            file: `./dist/entry.latest.min.js`,
            format: 'umd',
            name: jsGlobalName,
            sourcemap: true,
            noConflict: true
        }, {
            file: `./dist/entry.min.js`,
            format: 'umd',
            name: jsGlobalName,
            sourcemap: true,
            noConflict: true
        }]
    }

    return [{
        file: './dist/entry.js',
        format: 'umd',
        name: jsGlobalName,
        noConflict: true
    }, {
        file: './demo/entry.js',
        format: 'umd',
        name: jsGlobalName,
        noConflict: true
    }]
}
  