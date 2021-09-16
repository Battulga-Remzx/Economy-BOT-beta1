const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let roles = Object.keys(client.buyrole);
  let content = "";
  
  for (var i in roles) {
    content += `${roles[i]} - :dollar: ${client.buyrole[roles[i]].cost}\n`
  }

let embed = new MessageEmbed()
  .setTitle("Role дэлгүүр")
  .setDescription(content)
  .setColor("BLURPLE")
  .setFooter("-buyrole <role> бичиж бараагаа авна уу.")
  return message.channel.send(embed);
};

exports.help = {
  name: "rolestore",
  aliases: [],
  usage: `rolestore`
};