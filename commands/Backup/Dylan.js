const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let uicon = ('https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/14494694_743985655739970_8165687620355279290_n.jpg?oh=d19ef063d666e3abdaccc3aaacdcba8c&oe=5B0D2E08');
  let iUser = ('417640859878686720');
  let userembed = new Discord.RichEmbed()

  //.setDescription("Bot Information", message.author.avatarURL)
  .setColor("#00ffff")
  .setThumbnail(uicon)
  .addField("Dylan known as one of the most cancerous persons existing", 'The picture that was involved is a picture of dylan')

  .setTimestamp()

  return message.channel.send(userembed);
  }


module.exports.help = {
  name: "dylan"
}
