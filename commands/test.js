const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
//message.channel.send(`${message.author}, Im Working :joy:`);

let embed = new Discord.RichEmbed()
	.setColor("#00ffff")
	.setDescription(`Im Working :joy:`)
  .setTimestamp();
	message.channel.send(embed);


}
module.exports.help = {
  name: "test"
}
