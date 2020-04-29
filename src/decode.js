const service = require('./service/service')

const decodeMessage = (message) => {
  console.log('Decoding message...');
  let original = message.cifrado.toLowerCase();
  message.decifrado = '';
  const check = /[a-z]/;
  for (let i = 0; i < original.length; i++) {
    let char = original[i];
    if (check.test(original[i])) {
      let code = original.charCodeAt(i) - message.numero_casas;
      if (code < 97) code += 26;
      char = String.fromCharCode(code);
    }
    message.decifrado += char;
  }
  service.saveFile(message);
  console.log(message.decifrado);
}

module.exports = { decodeMessage }