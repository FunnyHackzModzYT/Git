  const Discord = require("discord.js");


   module.exports.run = async (bot, message, args) => {
  let iUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!iUser) return message.channel.send("Can't find user!");
  let uicon = iUser.user.displayAvatarURL;

  let botuser = (bot.user.username)
  let bicon = bot.user.displayAvatarURL;
  message.channel.send(uicon);
  //message.channel.send('Here') {




  //bot.channels.get('418072810674585630').send(`${message.author.username}/${message.author.id} used the command ${module.exports.help.name} on ${iUser.user.username}/${iUser.id}`);
  //bot.channels.get('418072810674585630').send(`${message.author} used the command ${module.exports.help.name}`);






	bot.user.sendMessage('FunnyHackz&ModzYT#3804', 'botinfo command used');
}

module.exports.help = {
  name: "avatar"
}
