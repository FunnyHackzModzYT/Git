const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //https://media.discordapp.net/attachments/404862122091216896/417067461557485568/o_o_by_charleston_and_itchy.png
//message.channel.send(`${message.author}, Because im smart`);
message.channel.send(`${message.author} Because my parents gave me big eyes`, {
  file: "https://media.discordapp.net/attachments/404862122091216896/417067461557485568/o_o_by_charleston_and_itchy.png"

});

}
module.exports.help = {
  name: "how.did.you.know"
}
