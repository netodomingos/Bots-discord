const Discord = require('discord.js')

const client = new Discord.Client()

client.on('ready', () => {
    console.log(`Connected as ${client.user.tag}`)


    client.user.setActivity('With JavaScript', { type: 'PLAYING' })
})

client.login('NDgzMDMxNjYwMjc1ODI2Njg4.XcNXIg.uaghnd1Ba8hyDEY-L_vVFw-8Qb0')
