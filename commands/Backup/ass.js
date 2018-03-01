const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send(`${message.author} Big Ass Ma Boy`, {
    file: "https://ae01.alicdn.com/kf/HTB17RH2OFXXXXXCaXXXq6xXFXXXH/Sport-Women-Fitness-Peach-Ass-Pants-High-Elastic-Motion-Running-Yoga-Pants-To-Mention-Pants-Boo.jpg_640x640.jpg"

  });
}
module.exports.help = {
  name: "ass"
}
