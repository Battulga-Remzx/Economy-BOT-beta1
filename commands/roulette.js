const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let user = message.author;

  function isOdd(num) {
    if (num % 2 == 0) return false;
    else if (num % 2 == 1) return true;
  }

  let colour = args[0];
  let money = parseInt(args[1]);
  let moneydb = client.db.fetch(`money_${message.author.id}`);

  let random = Math.floor(Math.random() * 37);

  let moneyhelp = new MessageEmbed()
    .setTitle(`<@${user.id}>`)
    .setColor("#FFFFFF")
    .setDescription(
      `<:x:618736602901905418> өнгө болон бооцоогоо оруулна уу! | \n [GREEN, RED, BLACK] [мөнгө]`
    );

  let moneymore = new MessageEmbed()
    .setTitle(`<:x:618736602901905418> Алдаа гарлаа`)
    .setColor("#FFFFFF")
    .setDescription(
      `<:x:618736602901905418> <@${user.id}> таний мөнгө хүрэхгүй байна`
    );

  let colorbad = new MessageEmbed()
    .setTitle(`<@${user.id}>`)
    .setColor("#FFFFFF")
    .setDescription(
      `<:x:618736602901905418> өнгөө сонгоно уу!| \n\n Red [1.5x] Black [2x] Green [15x]`
    );

  let moneybug = new MessageEmbed()
    .setTitle(`<@${user.id}>`)
    .setColor("#FFFFFF")
    .setDescription(`<:x:618736602901905418> урвуу тоо оруулах боломжгүй`);

  if (money < 0) return message.channel.send(moneybug);
  if (!colour) return message.channel.send(colorbad);
  colour = colour.toLowerCase();
  if (!money) return message.channel.send(moneyhelp);
  if (money > moneydb) return message.channel.send(moneymore);

  if (colour == "b" || colour.includes("black")) colour = 0;
  else if (colour == "r" || colour.includes("red")) colour = 1;
  else if (colour == "g" || colour.includes("green")) colour = 2;
  else return message.channel.send(colorbad);

  if (random == 0 && colour == 2) {
    // Green
    money *= 15;
    await client.db.add(`money_${message.author.id}`, money);
    let moneyEmbed1 = new MessageEmbed()
      .setTitle(`<@${user.id}>`)
      .setColor("#FFFFFF")
      .setDescription(
        `GREEN буулаа баяр хүргэе ${money} төгрөг хожлоо\n\n ихэсгэж авсан : 15x`
      );
    message.channel.send(moneyEmbed1);
    console.log(`${message.author.tag} Won ${money} on green`);
  } else if (isOdd(random) && colour == 1) {
    // Red
    money = parseInt(money * 1.5);
    await client.db.add(`money_${message.author.id}`, money);
    let moneyEmbed2 = new MessageEmbed()
      .setTitle(`<@${user.id}>`)
      .setColor("#FFFFFF")
      .setDescription(
        `RED буулаа баяр хүргэе  ${money} төгрөг хожлоо\n\n ихэсгэж авсан : 1.5x`
      );
    message.channel.send(moneyEmbed2);
  } else if (!isOdd(random) && colour == 0) {
    // Black
    money = parseInt(money * 2);
    await client.db.add(`money_${message.author.id}`, money);
    let moneyEmbed3 = new MessageEmbed()
      .setTitle(`<@${user.id}>`)
      .setColor("#FFFFFF")
      .setDescription(
        `BLACK буулаа баяр хүргэе  ${money} төгрөг хожлоо \n\n ихэсгэж авсан : 2x`
      );
    message.channel.send(moneyEmbed3);
  } else {
    // Wrong
    await client.db.subtract(`money_${message.author.id}`, money);
    let moneyEmbed4 = new MessageEmbed()
      .setTitle(`<@${user.id}>`)
      .setColor("#FFFFFF")
      .setDescription(
        `<:x:618736602901905418>  ${money} төгрөг алдлаа \n\nMultiplier: 0x`
      );
    message.channel.send(moneyEmbed4);
  }
};
exports.help = {
  name: "---------------Roulette----------",
  aliases: ["roulette"],
  usage: `roulette`
};
