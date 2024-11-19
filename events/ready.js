const client = require('../index')
const chalk = require('chalk')

client.on('ready', () => {
    console.log(chalk.bold.underline.italic.bgBlueBright(`Bot [${client.user.username}] online com sucesso!`))
})