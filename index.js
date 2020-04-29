const service = require('./src/service/service')
const decode = require('./src/decode')



const main = async () => {
  const message = await service.generateData();
  decode.decodeMessage(message)
}

main()