const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  if(client.config.president.includes(message.author.id)) return;
  let author = message.author;
  let amount = Math.floor(Math.random() * 10000 - 9999) + 1;
  let pre = client.eco.pre(client.ecoAddUser, amount);
if (pre.onCooldonwns) return message.reply(`арай болоогүй байна ${pre.time.minutes} минут ${pre.time.seconds}секунд`)
  else return message.reply(`мөнгө амжилттай орлоо ${pre.amount}`)
};

exports.help = {
  name: "---------------Ерөнхийлөгч----------",
  aliases: ["pre"],
  usage: `pre`
};

