exports.execute = async (client, message, args) => {
    let users = [
        "PewDiePie",
        "T-Series",
        "Sans",
        "Zero"
    ];
    let amount = Math.floor(Math.random() * 1000) + 10;
    let beg = client.eco.beg(client.ecoAddUser, amount, { canLose: true });
    if (beg.onCooldown) return message.reply(`Байж бай ямар их бичдэг юм бэ ! энэ цагыг дуусхаар бич! ${beg.time.seconds} секунд.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** Begon Thot! Try again later.`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** чамайг урамшуллаа **${beg.amount}** 💸. Чамд одоо байхгүй **${beg.after}** 💸.`);
};

exports.help = {
    name: "beg",
    aliases: [],
    usage: "beg"
}
