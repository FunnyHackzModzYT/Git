const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let users = ["208948873433972737"];
  if(!users.includes(message.author.id)) return message.channel.send("You cant use this command!");
        const nickname = args.join(" ");
        message.delete().catch();
        bot.user.setUsername(nickname);


}
module.exports.help = {
  name: "setnickname"
}
