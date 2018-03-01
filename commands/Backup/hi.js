const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.channel.send(`Hi ${message.author}, How are you today`);

}
module.exports.help = {
  name: "hi"
}
