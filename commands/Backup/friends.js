const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    author: {
      //name: client.user.username,
      //icon_url: client.user.avatarURL
    },
    title: "My Friend List",
    description: "This is my friend list",
    fields: [{
        name: "1",
        value: "FunnyHackz&ModzYT"
      },
      {
        name: "2",
        value: "SuperMan_Gaming"
      }
    ],
    timestamp: new Date(),
    footer: {
      //icon_url: client.user.avatarURL,
      text: "© Example"
    }
  }
});
// let bicon = bot.user.displayAvatarURL;
// let botembed = new Discord.Embed()
// .setDescription("Bot Information")
// .setColor("#15f153")
// .setThumbnail(bicon)
// .addField(`@FunnyHackz&ModzYT#3804`)
// .addField(`@SuperMan_Gaming#2834`)
// .addField(`___________________`);
//


return message.channel.send(botembed);
}

module.exports.help = {
name: "friends"
}
