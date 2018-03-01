const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
       if(!message.member.hasPermission("MODERATOR")) return;
        const nickname = args.join(" ");
        message.delete().catch();
      //  bot.user.setUsername(nickname);


}
module.exports.help = {
  name: "nickname111111"
}
