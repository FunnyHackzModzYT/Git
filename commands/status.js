const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let users = ["208948873433972737"];
  if(!users.includes(message.author.id)) return message.channel.send("You cant use this command!");
  const StatusMessage = args.join(" ");
  bot.user.setStatus(StatusMessage);
  message.channel.send(`Status set to ${StatusMessage}`);



}
module.exports.help = {
  name: "setstatus"
}
