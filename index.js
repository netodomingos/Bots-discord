const Discord = require('discord.js')

const client = new Discord.Client()

client.on('ready', () => {
    client.user.setActivity('With JavaScript', { type: "PLAYING" })
})

client.on('message', (recivedMessage) => {
    if (recivedMessage.content.startsWith('!')) {
        pressCommand(recivedMessage)
    }
})

function pressCommand(recivedMessage) {
    let fullCommand = recivedMessage.content.substr(1)
    let splitCommand = fullCommand.split(' ')
    let primaryCommand = splitCommand[0]
    let arguments = splitCommand.slice(1)

    if (primaryCommand === 'html') {
        simpleExHtml()
    }
    if (primaryCommand === 'js') {
        simpleExJs()
    }
    if (primaryCommand === 'css') {
        simpleExCss()
    }
}


async function simpleExHtml() {
    const botText = client.channels.get('...')
    let attachment = new Discord.Attachment('https://www.caelum.com.br/apostila-html-css-javascript/img/intro-html-css/index-2.png')

    botText.send('Hello Guys! Vamos para os exercicios diários?')
    botText.send(
        `Hoje o exercicio é uma simples página HTML! 
        ${await botText.send(attachment)} 
        Caso sinta dificuldades, está aqui o link do exercicio! 
        https://www.caelum.com.br/apostila-html-css-javascript/introducao-a-html-e-css/
        `
    )
}

function simpleExJs() {
    botText.send('Em breve')
}

function simpleExCss() {
    botText.send('Em Breve')
}

client.login('NDgzMDMxNjYwMjc1ODI2Njg4.Xcl-Sg.wTMBJ7bh6pCwwIxh3EwQ0UhlM3c')

