const fs = require('fs')
const client = require('../index')

const slashCommands = []

fs.readdir('./comandosAdm', (err, files) => {
    for(let comandos of files) {
        files = require(`../comandosAdm/${comandos}`)
        if (!files.name) return;
        client.slashCommands.set(files.name, files)

        slashCommands.push(files)
    }
})

client.on('ready', () => {
    const guilds = client.guilds.cache
    for(let servidor of guilds) {
        servidor[1].commands.set(slashCommands)
    }
})