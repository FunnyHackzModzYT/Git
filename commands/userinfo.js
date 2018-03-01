  const Discord = require("discord.js");

  module.exports.run = async (bot, message, args) => {
  let iUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!iUser) return message.channel.send("Can't find user!");
  let uicon = iUser.user.displayAvatarURL;
  //bot.channels.get('418072810674585630').send(`${message.author.username}/${message.author.id} used the command ${module.exports.help.name} on ${iUser.user.username}/${iUser.id}`);
	let userembed = new Discord.RichEmbed()
	//.setDescription("Bot Information", message.author.avatarURL)
	.setColor("#00ffff")
	.setThumbnail(uicon)
	.addField("Username", iUser.user.username, true)
	//.addField(`Roles`, iUser.roles.map)
  //.addField("Profile Picture", `[Click Me](uicon)`)
  //.addFIeld("UserID", iUser.id, true)
	.addField("Created On", iUser.user.createdAt)
  .addField("Joined on", iUser.joinedAt, true)
  .addField("Requested By", message.author.username)
  .addField("Requested At", message.createdAt)
  //.setFooter("Creator FunnyHackz&ModzYT#3804")
  .setTimestamp();

	return message.channel.send(userembed);
}


module.exports.help = {
  name: "userinfo"
}
