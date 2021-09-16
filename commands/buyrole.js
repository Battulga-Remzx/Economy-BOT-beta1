const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  if (userBalance.amount < 1) return message.channel.send("Чи яг л ядуу хүн шиг харагдаж байна.");
  let role = args[0];
  if (!role) return message.channel.send("Ямар Role авахаа хойно нь бичнэ үү");
  let hasRole = client.buyrole[role.toLowerCase()];
  if (!hasRole || hasRole == undefined) return message.reply("Ийм Role байхгүй байна хүсвэл Role store ын захирал руу хүсэлт гаргаж болно шүү ");
  let isRoleBalanceEnough = (userBalance.amount >= hasRole.cost);
  if (!isRoleBalanceEnough) return message.reply("Таний дансан дахь үлдэгдэл хүрэлцэхгүй байна "+hasRole.cost+" төгрөгөөр энэ Role ыг авна.");
  let buyrole = client.eco.moneyRemove(message.author.id, hasRole.cost);
  
  let roleStruct = {
    name: role.toLowerCase(),
    prize: hasRole.cost
  }
  
  
  client.db.push(`role_${message.authot.id}`, roleStruct);
  return message.channel.send(`**${role}** амжилттай авагдлаа Rolestore ын захирал орж ирээд Role ыг тань өгөх болно`);
}
exports.help = {
  name: "buyrole",
aliases: [],
usage: `buyrole <role>`}