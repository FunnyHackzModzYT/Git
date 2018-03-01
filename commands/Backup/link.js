const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   let link = await bot.generateInvite(["ADMINISTRATOR"]);
   return message.channel.send(link);


}
module.exports.help = {
  name: "link"
}
