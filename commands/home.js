const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let items = Object.keys(client.home);
  let content = "";
  
  for (var i in items) {
    content += `${items[i]} - :dollar: ${client.home[items[i]].cost}\n`
  }
  
  let embed = new MessageEmbed()
  .setTitle("Дэлгүүр")
  .setDescription(content)
  .setColor("BLURPLE")
  .setFooter(`~transfer @ ꦿ᭄|•MarkTzy༒#4107 [мөнгөн дүн] бичиж бараагаа авна уу.`)
  return message.channel.send(embed);
};

exports.help = {
  name: "---------------Гэр худалдан авах----------",
  aliases: ["home"],
  usage: `home`
};
