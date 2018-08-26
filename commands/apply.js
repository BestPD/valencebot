const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});
var counter = 0;

module.exports.run = async (bot, message, args, channel, setParent, guild) =>{
    if(!message.content.startsWith("/")) return;

    let ticketreden = args[0];
    if(!ticketreden) return message.reply("Error.")
    var channelname = "ticket-" + (ticketreden)
    let support = message.guild.roles.find('name', 'Appeals')
    const noticketchannel = client.channels.find(`name`, `ticket-${ticketreden}`);
    const ticket = client.channels.find(`name`, `ticket-${ticketreden}`);
    const supportchannel = client.channels.find(`name`, `support`);
    if(!/^ticket-\d*$/.test(message.channel.name)) {
        message.delete(1)
        message.guild.createChannel(channelname , 'text').then(m => m.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            READ_MESSAGES: false
            })+ m.overwritePermissions(message.author.id, {
            SEND_MESSAGES: true,
            ADD_REACTIONS: true,
            READ_MESSAGES: true
            }) + m.overwritePermissions(support.id, {
            SEND_MESSAGES: true,
            ADD_REACTIONS: true,
            READ_MESSAGES: true
            }))
        console.log(channelname + " made ")
        message.reply(`your ticket has been created in <#${ticket.id}> :tickets:\nMake sure to check <#${supportchannel.id}> for other questions.`);

        function msg(){
        const ticket = client.channels.find(`name`, `ticket-${ticketreden}`);
        const supportchannel = client.channels.find(`name`, `support`)
            message.reply(`your ticket has been created in <#${ticket.id}> :tickets:\nMake sure to check <#${supportchannel.id}> for other questions.`);

        }
      }

      exports.help = {
        name: 'apply',
        description: 'This will lock a channel down for the set duration, be it in hours, minutes or seconds.',
        usage: 'lockdown <duration>'
      };
