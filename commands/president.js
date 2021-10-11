exports.execute = async (client, message, args) => {
    if(!client.config.president.includes(message.author.id))return;
  let amount = Math.floor(Math.random() * 10) + 1;
    let addMoney = client.eco.weekly(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`Аль хэдийнээ авчихсан байна дараа дахиж оруулна уу! ${addMoney.time.days} хоног, ${addMoney.time.hours} цаг, ${addMoney.time.minutes} минут & ${addMoney.time.seconds} секунт-ын дараа авна уу.`);
    else return message.reply(`Таний мөнгө авагдлаа.Нийт: **${addMoney.amount}** 💸 ерөнхийлөгчийн авсан цалин **${addMoney.after}** 💸. таньд ажилын амжилт хүсье`);
};

exports.help = {
    name: "---------------Ерөнхийлөгч----------",
    aliases: ["president", "pre"],
    usage: "president"
}