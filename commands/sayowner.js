
const Discord = require("discord.js");
//      if (message.author.id !== 208948873433972737 || message.author.id !== 283147291131379713 || message.author.id !== 335862143524012042) return;
module.exports.run = async (bot, message, args) => {
      let users = ["208948873433972737", "283147291131379713", "335862143524012042", "335862143524012042"];
      //bot.channels.get('418072810674585630').send(`${message.author.username}/${message.author.id} used the command ${module.exports.help.name}`);
      if(!users.includes(message.author.id)) return message.channel.send("You cant use this command!");
      message.delete().catch();
      const sayMessage = args.join(" ");
      //message.delete().catch();
      //message.channel.send(sayMessage);
      let embed = new Discord.RichEmbed()
	.setColor("#00ffff")
	.setDescription(sayMessage)
  //.setFooter("Creator FunnyHackz&ModzYT#3804")
  .setTimestamp();

	return message.channel.send(embed);


}

module.exports.help = {
  name: "say1"
}
