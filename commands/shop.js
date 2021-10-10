const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let items = Object.keys(client.shop);
  let content = "";
  
  for (var i in items) {
    content += `${items[i]} - :dollar: ${client.shop[items[i]].cost}\n`
  }
  
  let embed = new MessageEmbed()
  .setTitle("Дэлгүүр")
  .setDescription(content)
  .setColor("BLURPLE")
  .setFooter("-buy <барааны нэр> бичиж бараагаа авна уу.")
  return message.channel.send(embed);
};

exports.help = {
  name: "---------------Дэлгүүр",
  aliases: ["shop"],
  usage: `shop`
};
