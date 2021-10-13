exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 30000-29999) + 1;
    let pre = client.eco.pre(client.ecoAddUser, amount);
    if (pre.onCooldown) return message.reply(`Чи аль хэдийнээ авчихсан байна дараа дахин хийнэ үү! ${pre.time.hours} hours, ${pre.time.minutes} minutes & ${pre.time.seconds} seconds to claim it again.`);
    else return message.reply(`Мөнгө амжилттай авагдлаа **${pre.amount}** 💸чамд одоо байгаа **${pre.after}** 💸байна.`);
};

module.exports.help = {
    name: "---------------Өдөр тутмын орлого----------",
    aliases: ["pre"],
    usage: "pre"
}
