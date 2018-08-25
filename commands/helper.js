const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let serverembed = new Discord.RichEmbed()
  .setColor("#c14545")
  .addField("Helper", "Becoming staff on Valence is not easy work, which is why we search for the highest quality applicants to join our team. As Helper, you are responsible for moderating In Game and on our Discord server, and assisting players accordingly. The requirements for Helper consist of you being active, capable of moderating and punishing rulebreakers, and being mature and helpful. ")

  return message.channel.send(serverembed);

  return;
  }

  module.exports.help = {
    name: "about"
  };
