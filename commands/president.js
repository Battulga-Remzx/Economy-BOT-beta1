exports.execute = async (client, message, args) => {
  if (!client.config.president.includes(message.author.id)) return;
  let users = ["Working..."];
  let amount = Math.floor(Math.random() * 1000000) + 1000000;
  let president = await client.eco.beg(client.ecoAddUser, amount, {
    canLose: true,
    preCooldown: 605000000,
    customName: "president"
  });
  if (president.onpreCooldown)
    return message.reply(
      `Та ядарсан байна ${president.time.days} өдөр ${president.time.hours} цаг ${president.time.minutes} минут  ${president.time.seconds} секундын дараа ажилаа хийгээрэй.`
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
  aliases: ["president", "pre"],
  usage: "president"
};
