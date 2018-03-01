const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send(`WEIRDO ALARM`, {
    file: "https://memegenerator.net/img/instances/500x/59335107/warning-weirdo-again.jpg"

  });
}
module.exports.help = {
  name: "WEIRDOALARM"
}
