const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      
     return(!message.author.id('252122912222478338'));
 
      if(!message.member.hasPermission("MODERATOR")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      bot.channels.get('418072810674585630').send(`${message.author.username}/${message.author.id} used the command ${module.exports.help.name}`);
let embed = new Discord.RichEmbed()
	.setColor("#00ffff")
	.setDescription(sayMessage)
  .setTimestamp();

	return message.channel.send(embed);

}

module.exports.help = {
  name: "say"
}
