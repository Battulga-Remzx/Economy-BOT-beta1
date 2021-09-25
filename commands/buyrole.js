const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  if (userBalance.amount < 1) return message.channel.send("Чи яг л ядуу хүн шиг харагдаж байна.");
  let role = args[0];
  if (!role) return message.channel.send("Чи юу худалдаж авах вэ?");
  let hasRole = client.shop[role.toLowerCase()];
  if (!hasRole || hasRole == undefined) return message.reply("Ийм бараа байхгүй байна");
  let isBalanceEnough = (userBalance.amount >= hasRole.cost);
  if (!isBalanceEnough) return message.reply("Таний дансан дахь үлдэгдэл хүрэлцэхгүй байна "+hasRole.cost+" төгрөгөөр энэ барааг авч болно.");
  let buy = client.eco.removeMoney(message.author.id, hasRole.cost);
  
  let itemStruct = {
    name: role.toLowerCase(),
    prize: hasRole.cost
  }
  
  
  client.db.push(`roles_${message.author.id}`, itemStruct);
  return message.channel.send(`Худалдан авалт **${role}** амжилттай **:dollar: ${hasRole.cost}**  төгрөг болло.`);
}

exports.help = {
  name: "buyrole",
  aliases: [], 
  usage: `buyrole <role>`
};