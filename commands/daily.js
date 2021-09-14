module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 500) + 100;
    let addMoney = client.eco.daily(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`Чи аль хэдийнээ авчихсан байна дараа дахин хийнэ үү! ${addMoney.time.hours} hours, ${addMoney.time.minutes} minutes & ${addMoney.time.seconds} seconds to claim it again.`);
    else return message.reply(`Мөнгө амжилттай авагдлаа **${addMoney.amount}** 💸чамд одоо байгаа **${addMoney.after}** 💸байна.`);
};

module.exports.help = {
    name: "daily",
    aliases: [],
    usage: "daily"
}