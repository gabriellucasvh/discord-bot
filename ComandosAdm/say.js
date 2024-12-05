const { ApplicationCommandType, ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'say',
    description: 'Digite algo para eu falar.',
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: 'mensagem',
            description: 'Escreva algo para eu reproduzir.',
            type: ApplicationCommandOptionType.String,
            required: true,
        },
    ],

    run: async (client, interaction) => {
        if (!interaction.member.permissions.has(PermissionFlagsBits.ManageGuild)) {
            await interaction.reply({
                ephemeral: true,
                content: `👋 Olá **${interaction.user.username}**, você não possui a permissão \`Gerenciar Servidor\` para utilizar este comando.`,
            });
        } else {
            const mensagem = interaction.options.getString('mensagem');
            await interaction.reply({ content: mensagem });
        }
    },
};
