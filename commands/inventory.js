const { MessageEmbed } = require("discord.js")
exports.execute = async (client, message, args) => {

  const embed = new MessageEmbed()
    .setAuthor(`Тоглогчын цунхэн дотор ${message.author.tag}`, message.guild.iconURL)
    .setColor("RANDOM")
    .setThumbnail()
    .setTimestamp();
  const x = client.db.get(`items_${message.author.id}`);
if(!x) { return message.channel.send(`ямар ч бараа байхгүй байна`); }
const arrayToObject = x.reduce((itemsobj, x) => {
    itemsobj[x.name] = (itemsobj[x.name] || 0) + 1;
    return itemsobj;
  const arraySellObject = (item)
}, {});
const result = Object.keys(arrayToObject).map(k => embed.addField(`Барааны нэр: ${k}`,`ширхэг: **${arrayToObject[k]}**`, false));
  const result2 = Object.keys(arrayToObject.map(k => embed.removeField()))
 
  return message.channel.send(embed);
}
exports.help = {
  name: "---------------Таний авсан зүйлс----------",
  aliases: ["inv"],
  usage: `inv`
}

