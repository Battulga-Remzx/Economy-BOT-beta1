const { MessageEmbed } = require("discord.js");

const p = require("pretty-ms");
const i = "<:infomation:779736273639440394>";

exports.execute = async (client, message, args) => {
  const command =
    client.commands.get(
      args
        .slice(0)
        .join(" ")
        .toString()
        .toLowerCase()
    ) ||
    client.commands.get(
      client.aliases.get(
        args
          .join(" ")
          .toString()
          .toLowerCase()
      )
    );

  const embed = new MessageEmbed()
    .setAuthor("Коммандууд")
    .setTitle("Мэдэхгүй зүйл гарвал #ЭНД ДАРЧ холбогдоно уу!")
    .setURL("https://www.facebook.com/profile.php?id=100038870322966")
    .setDescription(`Нийт комманд: ${client.commands.size}`)
    .setColor("BLURPLE")
    .setTimestamp()
    .setThumbnail(client.user.displayAvatarURL)
    .setFooter(message.author.tag, message.author.displayAvatarURL);
  client.commands.forEach(cmd => {
    embed.addField(
      `${cmd.help.name}`,
      `Aliases: ${cmd.help.aliases.join(", ") || "None"}\nUsage: \`${
        client.prefix
      }${cmd.help.usage}\``,
      true
    );
  });
  return message.channel.send(embed);
};

exports.help = {
  name: "---------------Тусламж----------",
  aliases: ["help"],
  usage: `help`
};
