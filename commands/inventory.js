const { MessageEmbed } = require("discord.js")

exports.execute = async (client, message, args ) => {

  let user = message.mentions.users.first() || message.author;
  
  let vip = await client.db.fetch(`vip_${user.id}`)
    if(vip === null) vip = 'None'
    if(vip === true) vip = 'Very Carry'

 let hool = await client.db.fetch(`food_${user.id}`)
if(hool === null) hool = '0'
  
  let water = await client.db.fetch(`us_${user.id}`)
  if(water === null) water = '0'

  let newcar = await client.db.fetch(`car_${user.id}`)
  if(newcar === null) newcar = '0'

  let phone = await client.db.fetch(`phone_${user.id}`)
  if(phone === null) phone = '0'

  let moneyEmbed = new MessageEmbed()
  .setTitle(`**${user}'s inventory**`)
  .setColor("#FFFFFF")
  .setDescription(`\n\nVIP RANK: ${vip}\n\n**Items**\n\nУс: ${water}\nХоол: ${hool} \nМашын: ${newcar}\nУтас: ${phone}`);
  message.channel.send(moneyEmbed)
};
exports.help = {
  name: "---------------Цүнх--------",
  aliases: ["inv"],
  usage: "inv"
};
