const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let users = ["208948873433972737", "335862143524012042"];
  if(!users.includes(message.author.id)) return message.channel.send("You cant use this command!");

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    //if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No Permissions!");
    //if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`You cant kick ${kUser}!`);

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#15f153")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "incidents");
    if(!kickChannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }
module.exports.help = {
  name: "kick1"
}
