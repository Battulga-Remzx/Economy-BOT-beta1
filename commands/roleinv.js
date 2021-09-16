const { MessageEmbed } = require("discord.js")
exports.execute = async (client, message, args) => {

  const embed = new MessageEmbed()
    .setAuthor(`Тоглогчын авсан Role ${message.author.tag}`, message.guild.iconURL)
    .setColor("RANDOM")
    .setThumbnail()
    .setTimestamp();
  const x = client.db.get(`role_${message.author.id}`);
if(!x) { return message.channel.send(`ямар ч Role аваагүй байна`); }
const arrayToObject = x.reduce((roleobj, x) => {
    roleobj[x.name] = (roleobj[x.name] || 0) + 1;
    return roleobj;
}, {});
const result = Object.keys(arrayToObject).map(k => embed.addField(`Role: ${k}`,`: **${arrayToObject[k]}**`, false));
  
 
  return message.channel.send(embed);
}
exports.help = {
  name: "roleinventory",
  aliases: ["inv"],
  usage: `roleinv`
}