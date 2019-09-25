const { Confirm } = require('enquirer');

const promptConfirm = async () => {
  const prompt = new Confirm({
    type: 'confirm',
    message: 'Wirklich?',
    initial () {
      const initial = 'y'
      this.options.initial = initial // How I am working around this issue
      return initial
    },
    default: '(Y/n)'
  })

  prompt.isTrue = (input) => input.toLowerCase() === 'y'
  prompt.isFalse = (input) => input.toLowerCase() === 'n'
  return await prompt.run()
}

promptConfirm()
