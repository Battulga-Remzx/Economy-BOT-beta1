const slotItems = [
  ":lemon:",
  ":banana:",
  "🍊",
  ":apple:",
  ":slot_machine:",
  ":strawberry:",
  ":cherries:"
];
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
exports.execute = async (client, message, args) => {
  let moneydb = await client.db.fetch(`money_${message.author.id}`);
  let author = message.mentions.users.first() || message.author;
  let money = parseInt(args[0]);
  let win = false;

  let moneymore = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<a:x:737764891657633814> таний мөнгө хүрэхгүй байна`);

  let moneyhelp = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<a:x:737764891657633814> Бооцооны мөнгөө тавьна уу`);

  if (!money) return message.channel.send(moneyhelp);
  if (money > moneydb) return message.channel.send(moneymore);

  let number = [];
  for (let i = 0; i < 3; i++) {
    number[i] = Math.floor(Math.random() * slotItems.length);
  }

  if (number[0] == number[1] && number[1] == number[2]) {
    money *= 9;
    win = true;
  } else if (
    number[0] == number[1] ||
    number[0] == number[2] ||
    number[1] == number[2]
  ) {
    money *= 2;
    win = true;
  }
  if (win) {
    let slotsEmbed1 = new MessageEmbed()
      .setTitle("Баяр хүргэе")
      .setDescription(
        `${slotItems[number[0]]} | ${slotItems[number[1]]} | ${
          slotItems[number[2]]
        }\n\nЧи ${money} төгрөг хожлоо`
      )
      .setFooter("Remzx official ECONOMY server")
      .setColor("#FFFFFF");
    message.channel.send(slotsEmbed1);
    await client.db.add(`money_${message.guild.id}_${author.id}`, money);
  } else {
    let slotsEmbed = new MessageEmbed()
      .setTitle("Дампуурлаа боль боль")
      .setDescription(
        `${slotItems[number[0]]} | ${slotItems[number[1]]} | ${
          slotItems[number[2]]
        }\n\nЧи ${money} төгрөг алдлаа`
      )
      .setFooter("Remzx official ECONOMY server")
      .setColor("#FFFFFF");
    message.channel.send(slotsEmbed);
    await client.db.subtract(`money_${message.author.id}`, money);
  }
};
exports.help = {
  name: "---------------Мөрийтэй тоглоом----",
  aliases: ["slots"],
  usage: `slot <money>`
};
