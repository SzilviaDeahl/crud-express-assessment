module.exports = {

  inputValidator: function (title, excerpt, body) {
    var inputs = [];
    if (title === ''){
      inputs.push('Title cannot be blank!')
    } if (excerpt === ''){
      inputs.push('Excerpt cannot be blank!')
    } if (body === ''){
      inputs.push('Body cannot be blank!')
    }
    console.log(inputs);
    return inputs;
  }
}
