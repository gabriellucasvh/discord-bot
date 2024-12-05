const { Client, IntentsBitField, InteractionType, Collection } = require('discord.js');
const { token } = require('./bottoken');
const fs = require('fs');

// Criação do cliente Discord com as intents necessárias
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildModeration,
    ],
});

// Evento para lidar com interações
client.on('interactionCreate', async (interaction) => {
    if (interaction.type !== InteractionType.ApplicationCommand) return;

    const command = client.slashCommands.get(interaction.commandName);
    if (!command) {
        await interaction.reply({ ephemeral: true, content: 'Houve um erro no comando selecionado.' });
        return;
    }

    try {
        await command.run(client, interaction);
    } catch (error) {
        console.error(`Erro ao executar o comando ${interaction.commandName}:`, error);
        await interaction.reply({ ephemeral: true, content: 'Ocorreu um erro ao executar este comando.' });
    }
});

// Configuração dos comandos slash
client.slashCommands = new Collection();
module.exports = client;


// Leitura de handlers
fs.readdir('./handler', (err, files) => {
    if (err) return console.error('Erro ao carregar handlers:', err);
    for (const file of files) {
        require(`./handler/${file}`);
    }
});

// Login do bot com o token em ./bottoken.js
client.login(token);
