const Discord = require("discord.js");
var os = require('os');


module.exports.run = async (bot, message, args) => {

  os.freemem();
  os.totalmem();

}
module.exports.help = {
  name: "usage"
}
