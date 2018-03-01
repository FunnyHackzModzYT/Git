const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //https://media.discordapp.net/attachments/404862122091216896/417067461557485568/o_o_by_charleston_and_itchy.png
//message.channel.send(`${message.author}, Because im smart`);
message.channel.send(`${message.author} i secretly touched ur spaghet`, {
  file: "http://i0.kym-cdn.com/entries/icons/original/000/025/054/SOMEBODY_TOUCHA_MY_SPAGHET.PNG"

});

}
module.exports.help = {
  name: "im.eating.spaghet"
}
