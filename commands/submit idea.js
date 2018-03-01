
const Discord = require("discord.js");
//      if (message.author.id !== 208948873433972737 || message.author.id !== 283147291131379713 || message.author.id !== 335862143524012042) return;
module.exports.run = async (bot, message, args) => {
  //bot.channels.get('418072810674585630').send(`${message.author.username}/${message.author.id} used the command ${module.exports.help.name}`);
  //bot.channels.get('418409347903913984').send(`${message.author.username}/${message.author.id} Suggested ${suggestion}`);
      const idea = args.join(" ");
      //message.delete().catch();
      //message.channel.send(sayMessage);
      let embed = new Discord.RichEmbed()
	.setColor("#00ffff")
	.setDescription('Idea Submitted Succesfully')
  //.setFooter("Creator FunnyHackz&ModzYT#3804")
  .setTimestamp();
  bot.channels.get('418411029043609601').send(`${message.author.username}/${message.author.id} Submitted The Idea ${idea}`);
	return message.channel.send(embed);


}

module.exports.help = {
  name: "submitidea"
}
