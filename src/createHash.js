const service = require('./service/service')
const crypto = require('crypto')

const createHash = (message) => {
  console.log('Creating SHA1 hash')
  const hash = crypto.createHash('SHA1')
  hash.update(message.decifrado)
  message.resumo_criptografico = hash.digest('base64')
  service.saveFile(message)
}

module.exports = { createHash }