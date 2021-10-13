const { MessageEmbed } = require("discord.js");


  exports.execute = (client, message , args) => {
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