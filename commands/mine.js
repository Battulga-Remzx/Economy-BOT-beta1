exports.execute = async (client, message, args) => {
  if (!client.config.miners.includes(message.author.id)) return;
  let users = ["Mining...", "Mining...", "Mining..", "Mining..."];
  let amount = Math.floor(Math.random() * 15000) + 5000;
  let mine = await client.eco.beg(client.ecoAddUser, amount, {
    canLose: true,
    minecooldown: 300000,
    customName: "mine"
  });
  if (mine.onmineCooldown)
    return message.reply(
      `Та ядарсан байна ${mine.time.minutes} минут  ${mine.time.seconds} секундын дараа ажилаа хийгээрэй.`
    );
  if (mine.lost)
    return message.channel.send(
      `**${
        users[Math.floor(Math.random() * users.length)]
      }:** харамсалтай байна та мөнгө олдворлож чадсангүй`
    );
  else
    return message.reply(
      `**${
        users[Math.floor(Math.random() * users.length)]
      }** ажил амжилттай **${mine.amount}** 💸. энэ таны олсон цалин **${
        mine.after
      }** 💸 таний нийт мөнгө.`
    );
};

exports.help = {
  name: "---------------Уурхайчид--------",
  aliases: ["mine"],
  usage: "mine"
};
