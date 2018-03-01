const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let users = ["208948873433972737"];
  if(!users.includes(message.author.id)) return message.channel.send("You cant use this command!");
  const activityMessage = args.join(" ");
  //bot.user.setActivity(activityMessage);
  bot.user.setPresence({ game: { name: activityMessage, type: 0 } });
  //message.channel.send("Succesfully Changed Activity", activityMessage);
  
  let embed = new Discord.RichEmbed()
	.setColor("#00ffff")
	.setDescription(`Succesfully Changed Activity`)
  .setTimestamp();
  message.channel.send(embed);




}
module.exports.help = {
  name: "setactivity"
}
