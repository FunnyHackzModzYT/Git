  const Discord = require("discord.js");

  module.exports.run = async (bot, message, args) => {
  let uicon = message.author.displayAvatarURL;
	let userembed = new Discord.RichEmbed()
	//.setDescription("Bot Information", message.author.avatarURL)
	.setColor("#00ffff")
	.setThumbnail(uicon)
	.addField("Username", message.author.username, true)
	.addField("Created On", message.author.createdAt, true)
  .addField("Requested By", message.author)
  //.setFooter("Creator FunnyHackz&ModzYT#3804")
  .setTimestamp()

	return message.channel.send(userembed);
}

module.exports.help = {
  name: "userinfo1"
}
