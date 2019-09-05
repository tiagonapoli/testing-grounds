const { Confirm } = require('enquirer');

const promptConfirm = async () => {
  const prompt = new Confirm({
    type: 'confirm',
    message: 'Wirklich?',
    initial: 'y',
    default: '(Y/n)'
  })

  prompt.isTrue = (input) => input.toLowerCase() === 'y'
  prompt.isFalse = (input) => input.toLowerCase() === 'n'
  return await prompt.run()
}

promptConfirm()
