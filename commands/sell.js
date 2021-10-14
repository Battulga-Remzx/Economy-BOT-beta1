const { MessageEmbed } = require("discord.js")

exports.execute = async (client, message, args) => {

  let user = message.author;

    if(args[0] == 'food') {
        let Embed2 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:x:618736602901905418> чамд идэх хоол байхгүй байна`);

        let foods = await client.db.fetch(`food_${user.id}`)

        if (foods < 1) return message.channel.send(Embed2)
       
        client.db.fetch(`food_${user.id}`)
        client.db.subtract(`food_${user.id}`, 1)

        let Embed3 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`✅ хоолоо идлээ.`);

        client.db.add(`money_${user.id}`,0)
        message.channel.send(Embed3)
    } else if(args[0] == 'water') {
        let Embed2 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:x:618736602901905418> чамд уух ус байхгүй байна`);

       let waters = await client.db.fetch(`us_${user.id}`)

        if (waters < 1) return message.channel.send(Embed2)
       
        client.db.fetch(`us_${user.id}`)
        client.db.subtract(`us_${user.id}`, 1)

        let Embed3 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`✅ Ус уулаа`);

        client.db.add(`money_${user.id}`, 0)
        message.channel.send(Embed3)
    } 
}
exports.help = {
  name: "---------------Данс & Бэлэн мөнгө------",
  aliases: ['use',  ],
  usage: `use <item>`
};