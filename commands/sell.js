const { MessageEmbed } = require("discord.js")

exports.execute = async (client, message, args) => {

  let user = message.author;

    if(args[0] == 'food') {
        let Embed2 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:x:618736602901905418> чамд идэх хоол байхгүй байна`);

        let nikeses = await client.db.fetch(`food_${user.id}`)

        if (nikeses < 1) return message.channel.send(Embed2)
       
        client.db.fetch(`food_${user.id}`)
        client.db.subtract(`food_${user.id}`, 1)

        let Embed3 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`✅ хоолоо идлээ.`);

        client.db.add(`money_${message.guild.id}_${user.id}`, 600)
        message.channel.send(Embed3)
    } else if(args[0] == 'car') {
        let Embed2 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Cross:618736602901905418> You don't have a Car to sell`);

       let cars = await client.db.fetch(`car_${message.guild.id}_${user.id}`)

        if (cars < 1) return message.channel.send(Embed2)
       
        client.db.fetch(`car_${message.guild.id}_${user.id}`)
        client.db.subtract(`car_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Check:618736570337591296> Sold a Car For 800 Coins`);

        client.db.add(`money_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    } else if(args[0] == 'mansion') {
        let Embed2 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Cross:618736602901905418> You don't have a Mansion to sell`);

        let houses = await client.db.fetch(`house_${message.guild.id}_${user.id}`)

        if (houses < 1) return message.channel.send(Embed2)
       
        client.db.fetch(`house_${message.guild.id}_${user.id}`)
        client.db.subtract(`house_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Check:618736570337591296> Sold a Mansion For 1200 Coins`);

        client.db.add(`money_${message.guild.id}_${user.id}`, 1200)
        message.channel.send(Embed3)
    };

}
exports.help = {
  name: "---------------Данс & Бэлэн мөнгө------",
  aliases: ['use',  ],
  usage: `use <item>`
};