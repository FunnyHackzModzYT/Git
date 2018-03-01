const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.channel.send(`${message.author}, Am i right?`);

}
module.exports.help = {
  name: "guess.my.name"
}
