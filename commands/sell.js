const { MessageEmbed } = require("discord.js");
  
exports.execute = (client, message , args) => {
let item = args[0]
  let author = message.author;
  let sellItem = client.shop[item.toLowerCase()];
      
  
  const x = client.db.get(`items_${message.author.id}`);
    let itemStruct = {
    name: item.toLowerCase(),
    prize: sellItem.scost
  };
  
  
  client.db.push(`items_${message.author.id}`, itemStruct);
  return message.channel.send(`Худалдан авалт **${item}** амжилттай **:dollar: ${sellItem.scost}**  төгрөг болло.`);
}

exports.help = {
  name: "---------------Юм худалдаж авах----------",
  aliases: ["buy"], 
  usage: `buy <item>`
};