exports.execute = async (client, message, args) => {
  if (!client.config.miners.includes(message.author.id)) return;
  let users = ["Mining...", "Mining...", "Mining..", "Mining..."];
  let amount = Math.floor(Math.random() * 15000) + 5000;
  let beg = await client.eco.beg(client.ecoAddUser, amount, {
    canLose: true,
    cooldown: 300000,
    customName: "search"
  });
  if (beg.onCooldown)
    return message.reply(
      `Та ядарсан байна ${beg.time.minutes} минут  ${beg.time.seconds} секундын дараа ажилаа хийгээрэй.`
    );
  if (beg.lost)
    return message.channel.send(
      `**${
        users[Math.floor(Math.random() * users.length)]
      }:** харамсалтай байна та мөнгө олдворлож чадсангүй`
    );
  else
    return message.reply(
      `**${
        users[Math.floor(Math.random() * users.length)]
      }** ажил амжилттай **${beg.amount}** 💸. энэ таны олсон цалин **${
        beg.after
      }** 💸 таний нийт мөнгө.`
    );
};

exports.help = {
  name: "---------------Уурхайчид--------",
  aliases: ["mine"],
  usage: "mine"
};
