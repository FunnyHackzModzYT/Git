const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const Announcementmsg = args.join(" ");

    let Announcementembed = new Discord.RichEmbed()
    //.setDescription("Bot_Announcement")
    .setColor("#15f153")
    .addField("Announcement", Announcementmsg)
    .addField("Time", message.createdAt)
    .addField(`@everyone`);

    let Announcementchannel = message.guild.channels.find(`name`, "botannouncements");
    if(!Announcementchannel) return message.channel.send("Couldn't find botannouncements channel.");


    message.delete().catch(O_o=>{});
    Announcementchannel.send(Announcementembed);

    return;
}

module.exports.help = {
  name: "botmsg"
}
