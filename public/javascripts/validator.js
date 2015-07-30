module.exports = {

  inputValidator: function (title, excerpt) {
    var inputs = [];
    if (title = ''){
      inputs.push('Title cannot be blank!')
    } if (excerpt === ''){
      inputs.push('Excerpt cannot be blank')
    }
    return inputs;
  }

}
