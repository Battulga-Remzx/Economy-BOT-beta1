const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let user = message.author;

  let author = client.db.fetch(`money_${message.author.id}`);

  let Embed = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(
      `<:x:618736602901905418> Чи 500000 төгрөгөөр VIP Rank авах боломжтой `
    );

  if (args[0] == "vip") {
    if (author < 10000) return message.channel.send(Embed);

    client.db.fetch(`vip_${user.id}`);
    client.db.set(`vip_${user.id}`, true);

    let Embed2 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`✅ 500000 төгрөгөөр амжилттай VIP авагдлаа`);

    client.db.subtract(`money_${user.id}`, 500000);
    message.channel.send(Embed2);
  } else if (args[0] == "water") {
    let Embed2 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `<:x:618736602901905418> чи 3500 төгрөгөөр ус авах боломжтой`
      );

    if (author < 3500) return message.channel.send(Embed2);

    client.db.fetch(`us_${user.id}`);
    client.db.add(`us_${user.id}`, 1);

    let Embed3 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`✅ Ус амжилттай авагдлаа`);

    client.db.subtract(`money_${user.id}`, 3500);
    message.channel.send(Embed3);
  } else if (args[0] == "food") {
    let EmbeD2 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `<:x:618736602901905418> чи 10000 төгрөгөөр хоол авах боломжтой`
      );

    if (author < 10000) return message.channel.send(EmbeD2);

    client.db.fetch(`food_${user.id}`);
    client.db.add(`food_${user.id}`, 1);

    let EmbeD3 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`✅ Хоол амжилттай авагдлаа`);

    client.db.subtract(`money_${user.id}`, 10000);
    message.channel.send(EmbeD3);
  } else if (args[0] == "car") {
    let Embed2 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `<:x:618736602901905418> чи 50000000 төгрөгөөр машин авах боломжтой`
      );

    if (author < 50000000) return message.channel.send(Embed2);

    client.db.fetch(`car_${user.id}`);
    client.db.add(`car_${user.id}`, 1);

    let Embed3 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`✅ Чи шинэ машинтай боллоо`);

    client.db.subtract(`money_${user.id}`, 50000000);
    message.channel.send(Embed3);
  } else if (args[0] == "phone") {
    let Embed2 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `<:x:618736602901905418> чи 3000000 төгрөгөөр утас авах боломжтой`
      );

    if (author < 3000000) return message.channel.send(Embed2);

    client.db.fetch(`phone_${user.id}`);
    client.db.add(`phone_${user.id}`, 1);

    let Embed3 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`✅ I phone X амжилттай авагдлаа`);

    client.db.subtract(`money_${user.id}`, 3000000);
    message.channel.send(Embed3);
  } else if (args[0] == "RolexWatch") {
    let Embed5 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `<:x:618736602901905418> чи 30,000,000 төгрөгөөр RolexWatch авах боломжтой`
      );

    if (author < 30000000) return message.channel.send(Embed5);

    client.db.fetch(`rolexwatch_${user.id}`);
    client.db.add(`rolexwatch_${user.id}`, 1);

    let Embed4 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`✅ RolexWatch амжилттай авагдлаа`);
    client.db.subtract(`money_${user.id}`, 30000000);
    message.channel.send(Embed4);
  } else {
    let embed3 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        "✅ хоол хүнс болон бараанууд:\n Хоол: food\nҮнэ: 10,000\n\nУс: water\nҮнэ: 3,500\n\nМашин: car\nҮнэ: 50,000,000\n\nУтас: phone\nҮнэ: 3,000,000\n\nRolex цаг: RolexWatch\nҮнэ:30,000,000"
      );
    message.channel.send(embed3);
  }
};

exports.help = {
  name: "---------------Юм худалдаж авах----",
  aliases: ["buy"],
  usage: `buy <item>`
};
