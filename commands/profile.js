const { MessageEmbed } = require("discord.js")

module.exports.execute = async (client, message, args) => {
  if(!message.content.startsWith('m!'))return;  

  let user =  message.author;

  let money = await client.db.fetch(`money_${message.guild.id}_${user.id}`)
  if (money === null) money = 0;

  let bank = await client.db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let vip = await client.db.fetch(`bronze_${message.guild.id}_${user.id}`)
    if(vip === null) vip = 'None'
    if(vip === true) vip = 'Bronze'

  let moneyEmbed = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**${user}'s Profile**\n\nPocket: ${money}\nBank: ${bank}\nVIP Rank: ${vip}\n\n**Inventory**\n\nItems: ${item}
  message.channel.send(moneyEmbed)
};
