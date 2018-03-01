const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let sicon = message.guild.iconURL;
	//bot.channels.get('418072810674585630').send(`${message.author.username}/${message.author.id} used the command ${module.exports.help.name}`);
	let serverembed = new Discord.RichEmbed()
	//.setDescription("Server Info")
	.setColor("#00ffff")
	.setThumbnail(sicon)
	.addField("Server Name", message.guild.name)
	.addField("Created on", message.guild.createdAt)
	.addField("Joined on", message.member.joinedAt)
	.addField("Total Members", message.guild.memberCount)
  //.addField("Invite link", "[Click Me]()")
	.addField("Requested By", message.author.username)
	return message.channel.send(serverembed);
}


module.exports.help = {
  name: "serverinfo"
}




//
