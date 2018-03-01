const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        if(!message.member.hasPermission("MODERATOR")) return;
        const activityMessage = args.join(" ");
        message.delete().catch();
        bot.user.setActivity(activityMessage);


}
module.exports.help = {
  name: "activity"
}
