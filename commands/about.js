const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let serverembed = new Discord.RichEmbed()
  .setDescription("Welcome to Valence, the best assistant that offers various commands!")
  .setColor("#c14545")
  .addField("What is this bot?", "The Valence Bot is a bot that provides various information about the server, as well as some moderation commands.")
  .addField("How can I play Valence?", "Valence is still in development and this will be updated accordingly.")
  .addField("How can I become a staff member?", "Do !helper for more information.")
  .addField("_ _","Bot created by Tacking for use by Valence")

  return message.channel.send(serverembed);

  return;
  }

  module.exports.help = {
    name: "about"
  };
