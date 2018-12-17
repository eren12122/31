const Discord = require('discord.js');

exports.run = (client, message, args) => {
  const mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam İçin Herhangi Birşey Yazmalısın.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y'],
  permLevel: 4
};

exports.help = {
  name: 'yazdır',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yazdır <mesaj>'
};
