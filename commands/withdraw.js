const { MessageEmbed } = require("discord.js")

exports.execute = async (client, message , args) => {
let user = message.author;
  
  let member = client.db.fetch(`money_${user.id}`)
  let member2 = client.db.fetch(`bank_${user.id}`)

  if (args[0] == 'all') {
    let money = await client.db.fetch(`bank_${message.guild.id}_${user.id}`)
    
    client.db.subtract(`bank_${message.guild.id}_${user.id}`, money)
    client.db.add(`money_${message.guild.id}_${user.id}`, money)
    let embed5 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:Check:618736570337591296> You have withdrawn all your coins from your bank`);
  message.channel.send(embed5)
  
  } else {

  let embed2 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:x:618736602901905418> Specify an amount to withdraw`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
  }
  let embed3 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:Cross:618736602901905418> Урвуу мөнгө `);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:Cross:618736602901905418> You don't have that much money in the bank`);

  if (member2 < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:Check:618736570337591296> You have withdrawn ${args[0]} coins from your bank`);

  message.channel.send(embed5)
  client.db.subtract(`bank_${user.id}`, args[0])
  client.db.add(`money_${user.id}`, args[0])
  }
}
exports.help = {
  name: "---------------Данс => Бэлэн мөнгө ----------",
  aliases: ["wdraw"],
  usage: `withdraw`
};
