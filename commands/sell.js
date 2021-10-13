const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let author = message.author
  let x = client.db.get(`items_${message.author.id}`);
  let sell = client.db.subtract(`items_${message.author.id}`, 1);
  if (!sell || sell == undefined)
    return message.reply("ийм бараа байхгүй байна");
let buy = client.eco.removeMoney(message.author.id, sell);
};

exports.help = {
  name: "---------------Item ашиглах----------",
  aliases: ["use"], 
  usage: `use <x>`
};
