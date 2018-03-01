const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


      const sayMessage = args.join(" ");
      //bot.channels.get('418072810674585630').send(`${message.author.username}/${message.author.id} used the command ${module.exports.help.name}`);
let embed = new Discord.RichEmbed()
	.setColor("#00ffff")
	.setDescription(`${message.author.username} Is Afk`)
  .setTimestamp();

	return message.channel.send(embed);

}

module.exports.help = {
  name: "afk"
}
