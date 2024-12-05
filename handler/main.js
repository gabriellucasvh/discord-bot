const fs = require('fs');
const client = require('../index');
const chalk = require('chalk');

const slashCommands = [];

// Carregando os comandos da pasta comandosAdm
fs.readdir('./comandosAdm', (err, files) => {
    if (err) return console.error('Erro ao carregar comandos:', err);

    for (const file of files) {
        const command = require(`../comandosAdm/${file}`);
        if (!command.name) {
            console.warn(`Comando em ${file} ignorado: não possui uma propriedade 'name'.`);
            continue;
        }

        client.slashCommands.set(command.name, command);
        slashCommands.push(command);
    }
});

// Evento de 'ready' para registrar comandos nas guildas
client.on('ready', async () => {
    try {
        console.log(chalk.underline.green(`${client.user.tag} está online!`));

        const guilds = client.guilds.cache;
        for (const guild of guilds.values()) {
            await guild.commands.set(slashCommands);
            console.log(chalk.italic(`Comandos registrados na guilda: ${guild.name} (${guild.id})`));
        }
    } catch (error) {
        console.error('Erro ao registrar comandos:', error);
    }
});
