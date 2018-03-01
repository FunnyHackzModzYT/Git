const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
//bot.channels.get('418072810674585630').send(`${message.author.username}/${message.author.id} used the command ${module.exports.help.name}`);
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  //.setDescription("Bot Commands")
  .setColor("#00ffff")
  .setThumbnail(bicon)
  //.addField("Bot Name", bot.user.username, true)
  .addField("addrole", 'add a role for a user')
  .addField("ban", 'ban a user')
  .addField("kick", 'kick a user')
  .addField("removerole", 'remove a role for a user')
  .addField("report", 'report a user')
  .addField("say", 'make the bot say something')
  .addField("serverinfo", 'gives information about the server')
  .addField("botinfo", 'gives information about the bot')
  .addField("tempmute", 'mute someone temporary')
  .addField("submitidea", 'Submit a bot idea')
  //.addField("warn")
  //.addField("warnlevel", true)
  .addField('commands like ban,kick,tempmute. need a admin role', '.')
   return message.channel.send(botembed);

}
module.exports.help = {
  name: "cmd"
}
