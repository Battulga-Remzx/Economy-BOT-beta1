const { MessageEmbed } = require("discord.js");

module.exports.execute = async (client, message, args) => {
  let author = message.author;

  let member = client.db.fetch(`money_${author.id}`);
  let member2 = client.db.fetch(`bank_${author.id}`);

  if (args[0] == "all") {
    let money = await client.db.fetch(`money_${author.id}`);
    let bank = await client.db.fetch(`bank_${author.id}`);

    let embedbank = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription("<:x:618736602901905418> чамд бэлэн мөнгө байхгүй байна");

    if (money === 0) return message.channel.send(embedbank);

    client.db.add(`bank_${message.guild.id}_${author.id}`, money);
    client.db.subtract(`money_${message.guild.id}_${author.id}`, money);
    let embed5 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `<:Check:618736570337591296> You have deposited all your coins into your bank`
      );
    message.channel.send(embed5);
  } else {
    let embed2 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `<:Cross:618736602901905418> Specify an amount to deposit`
      );

    if (!args[0]) {
      return message.channel.send(embed2).catch(err => console.log(err));
    }
    let embed3 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `<:Cross:618736602901905418> You can't deposit negative money`
      );

    if (message.content.includes("-")) {
      return message.channel.send(embed3);
    }
    let embed4 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `<:Cross:618736602901905418> You don't have that much money`
      );

    if (member < args[0]) {
      return message.channel.send(embed4);
    }
    let embed5 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:Check:618736570337591296> You have deposited ${args[0]} coins into your bank`);

  message.channel.send(embed5)
  client.db.add(`bank_${author.id}`, args[0])
  client.db.subtract(`money_${author.id}`, args[0])
  }
};


