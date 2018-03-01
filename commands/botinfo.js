  const Discord = require("discord.js");

  module.exports.run = async (bot, message, args) => {
  let botuser = (bot.user.username)
  let bicon = bot.user.displayAvatarURL;
  //bot.channels.get('418072810674585630').send(`${message.author.username}/${message.author.id} used the command ${module.exports.help.name}`);
	let botembed = new Discord.RichEmbed()
	//.setDescription("Bot Information", message.author.avatarURL)
	.setColor("#00ffff")
	.setThumbnail(bicon)
	.addField("Bot Name", bot.user.username, true)
	.addField("Created On", bot.user.createdAt, true)
  //.addField("Joined on", botuser.joinedAt, true)
  .addField("Invite link", "[Click Me](https://goo.gl/a817EC)")
  .setFooter("Creator FunnyHackz&ModzYT#3804")
  .addField("Creator YT Channel", "[Click Me](https://www.youtube.com/channel/UCYCyx2qsjprxCDfQjQluoIg)")
  .setTimestamp()

	return message.channel.send(botembed);
	bot.user.sendMessage('FunnyHackz&ModzYT#3804', 'botinfo command used');
}

module.exports.help = {
  name: "botinfo"
}
