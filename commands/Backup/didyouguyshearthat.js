const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send(`${message.author} DID YOU GUYS HEAR HIM HIS AFK`, {
    file: "http://marcscottvoiceover.com/wp-content/uploads/2017/02/guy-with-megaphone.png"

  });
}
module.exports.help = {
  name: "afkjk"
}
