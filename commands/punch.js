exports.run = (client, message) => {
  let user = message.mentions.users.first();
      message.reply('You have punched <@' + user.id + '>')
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'punch',
  description: 'Smacks a user.',
  usage: 'punch <user>'
};
