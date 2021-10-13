const { MessageEmbed } = require("discord.js");
  const x = client.db.get(`items_${message.author.id}`);
exports.execute = (client, message , args) => {
 let author = message.author;
  let sellItem =  
      
    let itemStruct {
    name: item.toLowerCase(),
    prize: sellItem.scost
  }
  
  
  client.db.push(`items_${message.author.id}`, itemStruct);
  return message.channel.send(`Худалдан авалт **${item}** амжилттай **:dollar: ${hasItem.cost}**  төгрөг болло.`);
}

exports.help = {
  name: "---------------Юм худалдаж авах----------",
  aliases: ["buy"], 
  usage: `buy <item>`
};