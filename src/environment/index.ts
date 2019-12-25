// import ProdEnv from './prod'
// import DevEnv from './dev'
import { ENV_CONFIG } from './env'


let Env: ENV_CONFIG;
// @ts-ignore 在rollup-input-options.js 中replace
if ('__NODE_ENV__' === 'production') {
    Env = require('./prod').default //ProdEnv
} else {
    Env = require('./dev').default // DevEnv
}

export default Env
