const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')

const apiBaseURL = 'https://api.codenation.dev/v1/challenge/dev-ps';
const token = 'b06655bd83f504290603c8411e8aaa64900d49da';


const generateData = async () => {
  console.log('Fetching challenge data...')
  const response = await axios.get(`${apiBaseURL}/generate-data?token=${token}`)
  saveFile(response.data)
  return response.data
}

const saveFile = (data) => {
  console.log('Saving to answer.json...')
  fs.writeFileSync('./answer.json', JSON.stringify(data))
}

const submitAnswer = () => {
  console.log('Submitting answer...');
  const file = fs.createReadStream('./answer.json');
  const data = new FormData();
  data.append('answer', file, 'answer.json');
  axios({
    headers: data.getHeaders(),
    method: 'POST',
    url: `${apiBaseURL}/submit-solution?token=${token}`,
    data: data
  })
    .then(response => {
      console.log(`Final Score: ${response.data.score}`);
    })
    .catch(error => {
      console.error(`ERROR: ${error.response.data.message}`);
    });
}

module.exports = { generateData, saveFile, submitAnswer }