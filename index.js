const Discord = require('discord.js')
const client  = new Discord.Client()

client.once('ready', () => {
    console.log("Bot Ready!")
})

client.on('message', message => {
    if(message.content.includes("TC")){
        message.delete()
        message.channel.send("Fak U :wheeze:")
    };

    if(message.content === "seks"){
        message.channel.send("http://desi49.com")
    };

    if(message.content === "rickroll"){
        message.channel.send("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }
})

client.login("NzI3NTMzODcwODE5MzExNzE2.XvwZrw.qfghpoZcBS5v7Rth4l5KwvuU3Ac")