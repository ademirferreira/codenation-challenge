const service = require('./src/service/service')
const decode = require('./src/decode')
const hash = require('./src/createHash')


const main = async () => {
  const message = await service.generateData();
  decode.decodeMessage(message)
  hash.createHash(message)
}

main()