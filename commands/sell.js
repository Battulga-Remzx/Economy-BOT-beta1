const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  if (userBalance.amount < 1) return message.channel.send("Чи яг л ядуу хүн шиг харагдаж байна.");
  let item = args[0];
  if (!item) return message.channel.send("юу зарахаа бичнэ үү?");
  let hasItem = client.sell[item.toLowerCase()];
  if (!hasItem || hasItem == undefined) return message.reply("Ийм бараа байхгүй байна");
  let isBalanceEnough = (userBalance.amount >= hasItem.sell);
  
  
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.sell
  }
  
  
  client.db.push(`items_${message.author.id}`, itemStruct);
  return message.channel.send(`Худалдан авалт **${item}** амжилттай **:dollar: ${hasItem.sell}**  төгрөг болло.`);
}

exports.help = {
  name: "---------------Юм худалдаж авах----------",
  aliases: ["sell"], 
  usage: `sell <item>`
};