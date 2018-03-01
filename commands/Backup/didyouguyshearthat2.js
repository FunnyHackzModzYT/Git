const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send(`${message.author} HIS MUTED OMFG`, {
    file: "https://image.ibb.co/dW9d2c/14.png"

  });
}
module.exports.help = {
  name: "im.muted"
}
