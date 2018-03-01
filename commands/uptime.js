const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      
   embed = new Discord.RichEmbed()
	.setColor("#00ffff")
	.setDescription(bot.uptime)
  .setTimestamp();

	return message.channel.send(embed);

}

module.exports.help = {
  name: "uptime"
}
