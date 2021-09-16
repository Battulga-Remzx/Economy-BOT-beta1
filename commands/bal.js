const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let userBalance = client.eco.fetchMoney(user.id);
    const embed = new MessageEmbed()
        .setTitle(`Данс шалгаж байна`)
        .addField(`Хэрэглэгчийн нэр`, `<@${userBalance.user}>`)
        .addField(`Мөнгө`, `${userBalance.amount} 💸байна`)
        .addField(`Leaderboard Rank`, `Top ${userBalance.position} -т жигсаж байна`)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "bal",
    aliases: ["money", "credits", "balance"],
    usage: `bal`
}
