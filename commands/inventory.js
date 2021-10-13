const { MessageEmbed } = require("discord.js")

exports.execute = async (client, message, args ) => {

  let user = message.mentions.users.first() || message.author;
  
  let vip = await client.db.fetch(`hool_${user.id}`)
    if(vip === null) vip = 'None'
    if(vip === true) vip = 'Bronze'

  let shoes = await client.db.fetch(`us_${user.id}`)
  if(shoes === null) shoes = '0'

  let newcar = await client.db.fetch(`car_${user.id}`)
  if(newcar === null) newcar = '0'

  let newhouse = await client.db.fetch(`phone_${message.guild.id}_${user.id}`)
  if(newhouse === null) newhouse = '0'

  let moneyEmbed = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**${user}'s Profile**\n\nVIP Rank: ${vip}\n\n**Inventory**\n\nNikes: ${shoes}\nCars: ${newcar}\nMansions: ${newhouse}`);
  message.channel.send(moneyEmbed)
};
exports.help = {
  name: "---------------Цүнх--------",
  aliases: ["inv"],
  usage: "inv"
};
