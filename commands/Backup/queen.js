const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (bot, message, args) => {
let queenicon = "https://funnypictures2.fjcdn.com/comments/More+cushion+for+the+pushin+_1896b83d7a8516a691dba0318910914e.jpg";
//message.channel.send(queenicon);
let queenembed = new Discord.RichEmbed()
.setDescription("This is the Queen and likes to show us da wae")
.setColor("#15f153")
.setThumbnail(queenicon);
return message.channel.send(queenembed);
}
module.exports.help = {
  name: "queen"
}
