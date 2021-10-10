const { db } = require("quick.eco");

exports.execute = async (client, message, args) => {
  let member = message.mentions.members.first();
  let targetmember = db.fetch(`money_${member.id}`); // fetch mentioned users balance
  let author = db.fetch(`money_${message.author.id}`); // fetch authors balance

  if (!member) {
    return message.channel.send("Sorry, you forgot to mention somebody.");
  }
  if (author < 250) return message.channel.send(":x: You need atleast 250$ to rob somebody.");
  }

  

  
exports.help = {
  name: "rob",
  aliases: [],
  usage: `rob <member>`
};