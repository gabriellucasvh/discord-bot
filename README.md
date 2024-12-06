# 🤖 Bot para Discord
Este recurso foi criado com finalidade em auxiliar donos de servidores. A funcionalidade foi experimental(a fins de estudo), podendo ser aprimorada para melhor uso.
## Funcionalidades

- Use para banir um usuário do seu servidor.
```/ban```

- Use para limpar mensagens de um canal de texto, entre 1-100 com limite de até 14 dias.
```/clear```

- Use para expulsar um usuário do seu servidor.
```/kick```

- Para evitar ataques de spam, use para trancar canais do seu servidor.
```/lock```

- Checa como está a velocidade do bot para entrega de dados.
```/ping```

- Use para que o bot envie uma mensagem por você.
```/say```

- Retira a permissão do usuário interagir no servidor por um tempo determinado.
```/tempmute```

- Retira o banimento de um usuário.
```/unban```

- Faz com que a função `lock` seja desativada, voltando a funcionar todos os canais de texto
```/unlock```

## Tecnologias utilizadas

- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/en)
- [Discord.js](https://discord.js.org/) `14.13.0` O discord.js é uma biblioteca para criar bots no Discord, permitindo interagir com canais, mensagens e eventos da API do Discord.
- [chalk](https://www.npmjs.com/package/chalk) `4.1.0` Biblioteca do Node.js usada para estilizar texto no terminal.

## Como executar

1. Instale o [Node.js](https://nodejs.org/en)
2. Faça um clone desse repositório:
- Crie uma pasta no seu computador para o bot, com o nome de sua preferência 
- Abra o `terminal` dentro dessa pasta
- Clone o repositório com:
```
git clone https://github.com/gabriellucasvh/discord-bot.git
```
- Após clonar, digite `npm install` no terminal para ter as dependências de  `package.json`

# Crie ou abra sua aplicação em [Discord Developer](https://discord.com/developers/applications)
- Em `"Applications"`, selecione o seu bot
- Em `"Bot"`, na categoria `TOKEN`, selecione `Reset Token`
- Copie seu token
1. Crie um arquivo no diretório raiz chamado `"bottoken.js"` e cole seu token da seguinte forma:

```
module.exports = {
    token: 'seuTokenAqui'
}
```
Se preferir, defina o token localmente em `.env.local` e ajuste as importações conforme queira.

-  No terminal, inicie digitando `node index.js`

![](https://i.imgur.com/xBNOOS7.png)
