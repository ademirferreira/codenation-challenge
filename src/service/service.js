const axios = require('axios')
const fs = require('fs')

const apiBaseURL = 'https://api.codenation.dev/v1/challenge/dev-ps';
const token = '?token=b06655bd83f504290603c8411e8aaa64900d49da';


const generateData = async () => {
  console.log('Fetching challenge data...')
  const response = await axios.get(`${apiBaseURL}/generate-data${token}`)
  saveFile(response.data)
  return response.data
}

const saveFile = (data) => {
  console.log('Saving to answer.json...')
  fs.writeFileSync('./answer.json', JSON.stringify(data))
}

module.exports = { generateData, saveFile }