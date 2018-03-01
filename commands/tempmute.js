const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d
  let users = ["208948873433972737", "252122912222478338"];
  if(!users.includes(message.author.id)) return message.channel.send("You cant use this command!");

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(`name`, "muted");

  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#0000ff",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role

  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");


  await(tomute.addRole(muterole.id));



  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`, {

   // file: "https://cdn.discordapp.com/attachments/417105490980634634/417414986780901376/triggered-2.gif"
  });

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
    //bot.channels.get('418072810674585630').send(`${message.author.username}/${message.author.id} used the command ${module.exports.help.name} on ${tomute.user.username}/${tomute.id}`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "tempmute"
}
