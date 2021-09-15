const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let role = Object.keys(client.buyrole);
  let content = "";
  
  for (var i in role) {
    content += `${role[i]} - :dollar: ${client.buyrole[role[i]].cost}\n`
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