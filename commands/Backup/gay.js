const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send(`I found this guy and seems to be gay`, {
    file: "https://media1.tenor.com/images/bf41e095da90cfd11768c3559101c2a3/tenor.gif"

  });
}
module.exports.help = {
  name: "gay"
}
