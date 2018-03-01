const config = require("../config.json");
const status = config.status;
const activity = config.activity;

const Discord = require("discord.js");
//      if (message.author.id !== 208948873433972737 || message.author.id !== 283147291131379713 || message.author.id !== 335862143524012042) return;
module.exports.run = async (bot, message, args) => {
      let users = ["208948873433972737"];
      if(!users.includes(message.author.id)) return message.channel.send("You cant use this command!");
         //bot.user.setActivity(config.activity);
         bot.user.setPresence({ game: { name: config.activity, type: 0 } });
         //bot.user.setStatus('idle');
        //message.channel.send('');
        
        
        let embed = new Discord.RichEmbed()
	.setColor("#00ffff")
	.setDescription(`Reloaded Succesfully`)
  .setTimestamp();
message.channel.send(embed);



}

module.exports.help = {
  name: "rconfig"
}
