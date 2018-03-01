const botconfig = require("./botconfig.json");
const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const mysql = require("mysql");
var cli = new Discord.Client({autoReconnect:true});
bot.commands = new Discord.Collection();

process.on('uncaughtException', function (exception) {
   bot.destroy().then(bot.login(botconfig.token));
});

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    //let props1 = require(`./conversation/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
    //bot.commands.set(props.help.name, props1);
  });

});


var con = mysql.createConnection({
  host: botconfig.host,
  user: botconfig.user,
  password: botconfig.password,
  database: botconfig.database

})


bot.on("ready", async () => {
	console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity(config.actvity)
	//bot.user.setActivity(botconfig.activity);
});

bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;

	let prefix = config.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);





});

bot.login(botconfig.token);
