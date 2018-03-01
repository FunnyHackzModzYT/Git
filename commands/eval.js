const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //let users = ["208948873433972737"];
  //if(!users.includes(message.author.id)) return message.channel.send("You cant use this command!");
//but message is defined there
const content = message.content.split(' ').slice(1).join(' ');
const result = new Promise((resolve, reject) => resolve(eval(content)));

return result.then(output => {
 if (typeof output !== 'string') output = require('util').inspect(output, {
 depth: 0
 });
 if (output.includes(bot.token)) output = output.replace(bot.token, 'Gotcha. Nice Try');
 if (output.length > 1990) console.log(output), output = 'Too long to be printed (content got console logged)';

 return message.channel.send(output, {code: 'js'});
}).catch(err => {
 console.error(err);
 err = err.toString();

 if (err.includes(bot.token)) err = err.replace(bot.token, 'Gotcha. Nice Try');

 return message.channel.send(err, {code: 'js'});
});


}

module.exports.help = {
  name: "eval"
}
