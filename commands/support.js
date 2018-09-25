const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    message.guild.createChannel(`${message.author.username}-support`, 'text',[{
     type: 'Member',
     id: message.author.id,
     allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
     deny: ['MENTION_EVERYONE']
    }])
    .catch(console.error);
  }
  module.exports.help = {
    name: "support"
  }
