const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.addMoney(message.author.id);
  if (userBalance.amount < 1) return message.channel.send("Чи яг л ядуу хүн шиг харагдаж байна.");
  let item = args[0];
  if (!item) return message.channel.send("Чи юу худалдаж авах вэ?");
  let hasItem = client.ship[item.toLowerCase()];
  if (!hasItem || hasItem == undefined) return message.reply("Ийм бараа байхгүй байна");
  let isBalanceEnough = (userBalance.amount >= hasItem.scost);
  if (!isBalanceEnough) return message.reply("Таний дансан дахь үлдэгдэл хүрэлцэхгүй байна "+hasItem.cost+" төгрөгөөр энэ барааг авч болно.");
  let sell = client.eco.addMoney(message.author.id, hasItem.scost);
  let items = Object.keys(client.shop);
  
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  }
  
  
  client.db.push(`items_${message.author.id}`, itemStruct);
  return message.channel.send(`Худалдан авалт **${item}** амжилттай **:dollar: ${hasItem.cost}**  төгрөг болло.`);
}

exports.help = {
  name: "---------------Юм худалдаж авах----------",
  aliases: ["buy"], 
  usage: `buy <item>`
};