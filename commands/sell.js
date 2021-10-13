const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let user = client.db.get(`items_${message.author.id}`);

  
  
exports.help = {
    name: "---------------Ашиглах-",
    aliases: ["use"],
    usage: `use`
}