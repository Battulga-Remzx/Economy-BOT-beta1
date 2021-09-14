const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  if (userBalance.amount < 1) return message.channel.send("Чи яг л ядуу хүн шиг харагдаж байна.");
  let item = args[0];
  if (!item) return message.channel.send("Чи юу худалдаж авах вэ?");
  let hasItem = client.shop[item.toLowerCase()];
  if (!hasItem || hasItem == undefined) return message.reply("Ийм бараа байхгүй байна");
  let isBalanceEnough = (userBalance.amount >= hasItem.cost);
  if (!isBalanceEnough) return message.reply("Таний дансан дахь үлдэгдэл хүрэлцэхгүй байна "+hasItem.cost+"-аар энэ барааг авч болно.");
  let buy = client.eco.removeMoney(message.author.id, hasItem.cost);
  
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  
  client.db.push(`items_${message.author.id}`, itemStruct);
  return message.channel.send(`You purchased **${item}** for **:dollar: ${hasItem.cost}**.`);
};

exports.help = {
  name: "buy",
  aliases: [],
  usage: `buy <item>`
};
