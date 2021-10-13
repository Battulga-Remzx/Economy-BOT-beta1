const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  if (userBalance.amount < 1) return message.channel.send("Чи яг л ядуу хүн шиг харагдаж байна.");
  let item = args[0];
  if (!item) return message.channel.send("Чи юу худалдаж авах вэ?");
  let hasItem = client.shop[item.toLowerCase()];
  if (!hasItem || hasItem == undefined) return message.reply("Ийм бараа байхгүй байна");
  let isBalanceEnough = (userBalance.amount >= hasItem.cost);
  if (!isBalanceEnough) return message.reply("Таний дансан дахь үлдэгдэл хүрэлцэхгүй байна "+hasItem.cost+" төгрөгөөр энэ барааг авч болно.");
  let buy = client.eco.removeMoney(message.author.id, hasItem.cost);
  
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  }
  let itemSubtract = {
name: item.toLowerCase().
}
  
  
  client.db.push(`items_${message.author.id}`, itemStruct);
  return message.channel.send(`Худалдан авалт **${item}** амжилттай **:dollar: ${hasItem.cost}**  төгрөг болло.`);
}

exports.help = {
  name: "---------------Юм худалдаж авах----------",
  aliases: ["buy"], 
  usage: `buy <item>`
};