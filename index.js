const Discord = require('discord.js')

const client = new Discord.Client()

client.on('ready', () => {
    console.log(`Connected as ${client.user.tag}`)


    client.user.setActivity('With JavaScript', { type: 'PLAYING' })
})

client.login('...')

