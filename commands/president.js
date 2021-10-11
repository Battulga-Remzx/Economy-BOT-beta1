exports.execute = async (client, message, args) => {
  if (!client.config.miners.includes(message.author.id)) return;
  let users = ["Mining...", "Mining...", "Mining..", "Mining..."];
  let amount = Math.floor(Math.random() * 15000) + 5000;
  let president = await client.eco.beg(client.ecoAddUser, amount, {
    canLose: true,
    cooldown: 30000000,
    customName: "search"
  });
  if (president.onCooldown)
    return message.reply(
      `Та ядарсан байна ${president.time.minutes} минут  ${president.time.seconds} секундын дараа ажилаа хийгээрэй.`
    );
  if (president.lost)
    return message.channel.send(
      `**${
        users[Math.floor(Math.random() * users.length)]
      }:** харамсалтай байна та мөнгө олдворлож чадсангүй`
    );
  else
    return message.reply(
      `**${
        users[Math.floor(Math.random() * users.length)]
      }** ажил амжилттай **${president.amount}** 💸. энэ таны олсон цалин **${
        president.after
      }** 💸 таний нийт мөнгө.`
    );
};

exports.help = {
  name: "---------------Уурхайчид--------",
  aliases: ["president"],
  usage: "president"
};