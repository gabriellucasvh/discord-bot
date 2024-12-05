const { 
    ApplicationCommandType, 
    ApplicationCommandOptionType, 
    PermissionFlagsBits 
} = require('discord.js');

module.exports = {
    name: 'tempmute',
    description: 'Retira a permissão do usuário interagir no servidor por um tempo determinado (em minutos).',
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: 'membro',
            description: 'Mencione um membro.',
            type: ApplicationCommandOptionType.User,
            required: true,
        },
        {
            name: 'tempo',
            description: 'Duração do castigo do usuário (em minutos).',
            type: ApplicationCommandOptionType.Integer,
            required: true,
        },
        {
            name: 'motivo',
            description: 'Escreva o motivo do castigo.',
            type: ApplicationCommandOptionType.String,
            required: false,
        },
    ],

    run: async (client, interaction) => {
        if (!interaction.member.permissions.has(PermissionFlagsBits.ModerateMembers)) {
            return await interaction.reply({ 
                ephemeral: true, 
                content: `👋 Usuário: **${interaction.user.username}**, você não possui a permissão \`Membros de Castigo\` para utilizar este comando.` 
            });
        }

        const user = interaction.options.getUser('membro');
        const membro = interaction.guild.members.cache.get(user.id);

        if (!membro) {
            return await interaction.reply({
                ephemeral: true,
                content: '❌ O membro especificado não foi encontrado no servidor.',
            });
        }

        const minutos = interaction.options.getInteger('tempo');
        if (minutos <= 0) {
            return await interaction.reply({
                ephemeral: true,
                content: `❌ Admin: **${interaction.user.username}**, o tempo deve ser um valor positivo maior que zero.`,
            });
        }

        const milisec = minutos * 60 * 1000; // Converte minutos para milissegundos
        let motivo = interaction.options.getString('motivo') || 'Indefinido';

        try {
            await membro.timeout(milisec, motivo);
            await interaction.reply({
                content: `✅ Admin: **${interaction.user.username}**, o membro ${membro} (${membro.id}) foi castigado durante \`${minutos} minuto(s)\` com sucesso.`,
            });
        } catch (error) {
            console.error('Erro ao aplicar timeout:', error);
            await interaction.reply({
                content: `❌ Admin: **${interaction.user.username}**, não foi possível castigar o membro ${membro} (${membro.id}).`,
            });
        }
    },
};
