const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  let userBalance = client.eco.fetchMoney(user.id);
  const embed = new MessageEmbed()
    .setTitle(`Данс шалгаж байна`)
    .addField(`Хэрэглэгчийн нэр`, `<@${userBalance.user}>`)
    .addField(`Мөнгө`, `${userBalance.amount} 💸байна`)
    .addField(`Leaderboard Rank`, `Top ${userBalance.position} -т жигсаж байна`)
    .setColor("RANDOM")
    .setThumbnail(user.displayAvatarURL)
    .setTimestamp();
  return message.channel.send(embed);

  let bank = client.db.fetch(`bank_${message.guild.id}_${user.id}`);
  if (bank === null) bank = 0;
};
exports.help = {
  name: "---------------Дансаа шалгах----------",
  aliases: ["money", "balance", "bal"],
  usage: `bal`
};
