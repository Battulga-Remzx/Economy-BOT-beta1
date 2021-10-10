exports.execute = async (client, message, args) => {
    let users = [
        "Remzx Sponser",
        "Remzx Company",
        "Remzx Official",
        "Boss"
    ];
    let amount = Math.floor(Math.random() * 3000) + 1000;
    let beg = client.eco.beg(client.ecoAddUser, amount, { canLose: true });
    if (beg.onCooldown) return message.reply(`Байж бай ямар их бичдэг юм бэ ! энэ цагыг дуусхаар бич! ${beg.time.seconds} секунд.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** Дахиад нэг оролдоод үз.`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** чамайг урамшуллаа **${beg.amount}** 💸. одоо чамд **${beg.after}** 💸байна.`);
};

exports.help = {
    name: "---------------Бяцхан бэлэг",
    aliases: ["beg"],
    usage: "beg"
}
