import { Languages } from './src/Constants'

const env = {
  lan: Languages.en.id
}

let localEnv = {}

try {
  localEnv = require('./environment.local')
} catch (_) {
  //
}

export default {
  ...env,
  ...localEnv.default
}