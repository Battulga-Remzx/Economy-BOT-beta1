const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let bank = await client.db.fetch(`bank_${message.author.id}`);
  if (bank === null) bank = 0;
  let user = message.mentions.users.first() || message.author;
  let userBalance = client.eco.fetchMoney(user.id);
  let userBank = client.db.fetch(`bank_${message.author.id}`);
  const embed = new MessageEmbed()
    .setTitle(`Данс шалгаж байна`)
    .addField(`Хэрэглэгчийн нэр`, `<@${userBalance.user}>`)
    .addField(`Мөнгө`, `${userBalance.amount} 💸байна`)
    .addField(`Данс`, `${bank} 💸байна`)
    .addField(`Leaderboard Rank`, `Top ${userBalance.position} -т жигсаж байна`)
    .setColor("RANDOM")
    .setImage(user.displayAvatarURL)
    .setTimestamp();
  return message.channel.send(embed);
};
exports.help = {
  name: "---------------Дансаа шалгах----------",
  aliases: ["money", "balance", "bal"],
  usage: `bal`
};
