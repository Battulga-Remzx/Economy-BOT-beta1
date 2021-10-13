const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  
  let user = message.author;

    let author = client.db.fetch(`money_${message.guild.id}_${user.id}`)

    let Embed = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:Cross:618736602901905418> You need 2000 coins to purchase Bronze VIP`);

    if (args[0] == 'bronze') {
        if (author < 3500) return message.channel.send(Embed)
        
        client.db.fetch(`bronze_${message.guild.id}_${user.id}`);
        client.db.set(`bronze_${message.guild.id}_${user.id}`, true)

        let Embed2 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Check:618736570337591296> Purchased Bronze VIP For 3500 Coins`);

        client.db.subtract(`money_${message.guild.id}_${user.id}`, 3500)
        message.channel.send(Embed2)
    } else if(args[0] == 'nikes') {
        let Embed2 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Cross:618736602901905418> You need 600 coins to purchase some Nikes`);

        if (author < 600) return message.channel.send(Embed2)
       
        client.db.fetch(`nikes_${message.guild.id}_${user.id}`)
        client.db.add(`nikes_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Check:618736570337591296> Purchased Fresh Nikes For 600 Coins`);

        client.db.subtract(`money_${message.guild.id}_${user.id}`, 600)
        message.channel.send(Embed3)
    } else if(args[0] == 'car') {
        let Embed2 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Cross:618736602901905418> You need 800 coins to purchase a new car`);

        if (author < 800) return message.channel.send(Embed2)
       
        client.db.fetch(`car_${message.guild.id}_${user.id}`)
        client.db.add(`car_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Check:618736570337591296> Purchased a New Car For 800 Coins`);

        client.db.subtract(`money_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    } else if(args[0] == 'mansion') {
        let Embed2 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Cross:618736602901905418> You need 1200 coins to purchase a Mansion`);

        if (author < 1200) return message.channel.send(Embed2)
       
        client.db.fetch(`house_${message.guild.id}_${user.id}`)
        client.db.add(`house_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Check:618736570337591296> Purchased a Mansion For 1200 Coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 1200)
        message.channel.send(Embed3)
    } else {
        let embed3 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription('<:Cross:618736602901905418> Enter an item to buy')
        message.channel.send(embed3)
    }

}
  
exports.help = {
  name: "---------------Юм худалдаж авах----------",
  aliases: ["buy"], 
  usage: `buy <item>`
};