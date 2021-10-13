const { MessageEmbed } = require("discord.js")

exports.execute = async (client, message, args ) => {

  let user = message.mentions.users.first() || message.author;
  
  let vip = await client.db.fetch(`vip_${user.id}`)
    if(vip === null) vip = 'None'
    if(vip === true) vip = 'Very Carry'

  let shoes = await client.db.fetch(`us_${user.id}`)
  if(shoes === null) shoes = '0'

  let newcar = await client.db.fetch(`car_${user.id}`)
  if(newcar === null) newcar = '0'

  let newhouse = await client.db.fetch(`phone_${user.id}`)
  if(newhouse === null) newhouse = '0'

  let moneyEmbed = new MessageEmbed()
  .setTitle(`**${user}'s inventory**`)
  .setColor("#FFFFFF")
  .setDescription(`\n\nVIP RANK: ${vip}\n\n**Items**\n\nУс: ${shoes}\nХоол: $\nМашын: ${newcar}\nI phone X: ${newhouse}`);
  message.channel.send(moneyEmbed)
};
exports.help = {
  name: "---------------Цүнх--------",
  aliases: ["inv"],
  usage: "inv"
};
