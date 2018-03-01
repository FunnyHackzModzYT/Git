const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send(`${message.author} JUST TOOK A DUMP AND ITS BIG OOF`, {
    file: "http://imghumour.com/assets/Uploads/Confirmed-I-just-took-a-dump.jpg"

  });
}
module.exports.help = {
  name: "justdump"
}
