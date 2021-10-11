exports.execute = async (client, message, args) => {
    if(!client.config.president.includes(message.author.id))return;
  let amount = Math.floor(Math.random() * 10) + 1;
    let president = client.eco.president(client.ecoAddUser, amount);
    if (president.onCooldown) return message.reply(`Аль хэдийнээ авчихсан байна дараа дахиж оруулна уу! ${president.time.days} хоног, ${president.time.hours} цаг, ${president.time.minutes} минут & ${president.time.seconds} секунт-ын дараа авна уу.`);
    else return message.reply(`Таний мөнгө авагдлаа.Нийт: **${president.amount}** 💸 ерөнхийлөгчийн авсан цалин **${president.after}** 💸. таньд ажилын амжилт хүсье`);
};

exports.help = {
    name: "---------------Ерөнхийлөгч----------",
    aliases: ["president", "pre"],
    usage: "president"
}