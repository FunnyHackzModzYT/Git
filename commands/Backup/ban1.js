const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let users = ["208948873433972737", "335862143524012042"];
  if(!users.includes(message.author.id)) return message.channel.send("You cant use this command!");
  message.delete().catch();
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  message.delete().catch();
  if(!bUser) return; //message.channel.send("Can't find user!");
  message.delete().catch();
  let bReason = args.join(" ").slice(22);
  message.delete().catch();
  //let banEmbed = new Discord.RichEmbed()
  //.setDescription("~Ban~")
  //.setColor("#15f153")
  // .addField("Banned User", `${bUser} with ID ${bUser.id}`)
  // .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
  // .addField("Banned In", message.channel)
  // .addField("Time", message.createdAt)
  // .addField("Reason", bReason);

  let incidentchannel = message.guild.channels.find(`name`, "incidents");
  if(!incidentchannel) return; //message.channel.send("Can't find incidents channel.");

  message.guild.member(bUser).ban(bReason);
  //incidentchannel.send(banEmbed);


  return;
}


module.exports.help = {
  name: "ban1"
}
