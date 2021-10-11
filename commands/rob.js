const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  if (!client.config.mafias.includes(message.author.id)) return;
  let user = message.mentions.members.first();
  let targetuser = await client.db.fetch(`money_${user.id}`); // fetch mentioned users balance
  let author = await client.db.fetch(`money_${message.author.id}`);  
  
  if (!user) {
    return message.channel.send(":x: дээрэмдэх хүнээ сонгоно уу!");
  }
  if (author < 50000) {
    // if the authors balance is less than 250, return this.
    return message.channel.send(":x: You need atleast 250$ to rob somebody.");
  }

  if (targetuser < 5000) {
    // if mentioned user has 0 or less, it will return this.
    return message.channel.send(
      `:x: ${user.user.username} хэтэрхий бага мөнгөтэй болсон байна`
    );
  }

  let random = Math.floor(Math.random() * 1000-1) + 1; // random number 200-1, you can change 200 to whatever you'd like

  let embed = new MessageEmbed()
    .setDescription(
      `${user} хөөе  ${message.author} чамайг ${random} төгрөг-өөр дээрэмдлээ !`
    )
    .setColor("GREEN")
    .setTimestamp();
  message.channel.send(embed);

  client.db.subtract(`money_${user.id}`, random);
  client.db.add(`money_${message.author.id}`, random);
};

exports.help = {
  name: "---------------Дээрэм хийх----------",
  aliases: ["rob"],
  usage: `rob <member>`
  cooldowns: 5;
};
