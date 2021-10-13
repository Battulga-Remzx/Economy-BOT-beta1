const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  
  let user = message.author;

    let author = client.db.fetch(`money_${message.author.id}`);

    let Embed = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:Cross:618736602901905418> You need 10000 coins to purchase Bronze VIP`);

    if (args[0] == 'hool') {
        if (author < 10000) return message.channel.send(Embed)
        
        client.db.fetch(`hool_${user.id}`);
        client.db.set(`hool_${user.id}`, true)

        let Embed2 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Check:618736570337591296> Purchased Bronze VIP For 3500 Coins`);

        client.db.subtract(`money_${user.id}`, 10000)
        message.channel.send(Embed2)
    } else if(args[0] == 'us') {
        let Embed2 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Cross:618736602901905418> You need 600 coins to purchase some Nikes`);

        if (author < 600) return message.channel.send(Embed2)
       
        client.db.fetch(`us_${user.id}`)
        client.db.add(`us_${user.id}`, 1)

        let Embed3 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Check:618736570337591296> Purchased Fresh Nikes For 600 Coins`);

        client.db.subtract(`money_${user.id}`, 3500)
        message.channel.send(Embed3)
    } else if(args[0] == 'car') {
        let Embed2 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Cross:618736602901905418> You need 800 coins to purchase a new car`);

        if (author < 10000000) return message.channel.send(Embed2)
       
        client.db.fetch(`car_${user.id}`)
        client.db.add(`car_${user.id}`, 1)

        let Embed3 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Check:618736570337591296> Purchased a New Car For 800 Coins`);

        client.db.subtract(`money_${user.id}`, 800)
        message.channel.send(Embed3)
    } else if(args[0] == 'iphonex') {
        let Embed2 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Cross:618736602901905418> You need 1200 coins to purchase a Mansion`);

        if (author < 1200) return message.channel.send(Embed2)
       
        client.db.fetch(`house_${user.id}`)
        client.db.add(`house_${user.id}`, 1)

        let Embed3 = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Check:618736570337591296> Purchased a Iphone X For 3000000 Coins`);

        client.db.subtract(`money_${user.id}`, 3000000)
        message.channel.send(Embed3)
    } else {
        let embed3 = new MessageEmbed()
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