const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.channel.send(`Im just chilling and being a bot thanks for asking ${message.author}`);

}
module.exports.help = {
  name: "im.fine.how.are.you"
}
