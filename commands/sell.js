const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let user = message.author;

  if (args[0] == "nikes") {
    let Embed2 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `<:Cross:618736602901905418> You don't have Nikes to sell`
      );

    let itemuse = await client.db.fetch(`items_${user.id}`);

    if (itemuse < 1) return message.channel.send(Embed2);

    client.db.fetch(`items_${user.id}`);
    client.db.subtract(`items_${user.id}`, 1);

    let Embed3 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `<:Check:618736570337591296> Sold Fresh Nikes For 600 Coins`
      );
  }
};

exports.help = {
    name: "---------------Ашиглах-",
    aliases: ["use"],
    usage: `use`
}