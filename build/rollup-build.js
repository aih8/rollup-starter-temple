const rollup = require('rollup')
const rimraf = require("rimraf")
const isProd = true;
const inputOptions = require('./rollup-input-options')(isProd)
const outputOptions = require('./rollup-output-options')(isProd)

async function build() {
    // clean dist folder
    rimraf.sync('./dist')

    // create a bundle
    const bundle = await rollup.rollup(inputOptions)
  
    // generate code
    for (let item of outputOptions) {
        await bundle.generate(item)
        await bundle.write(item)
    }

    console.log('rollup build success.')
}

build();