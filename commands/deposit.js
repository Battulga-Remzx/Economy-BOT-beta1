const { MessageEmbed } = require("discord.js");

module.exports.execute = async (client, message, args) => {
  let author = message.author;

  let member = client.db.fetch(`money_${author.id}`);
  let member2 = client.db.fetch(`bank_${author.id}`);
  
  if (args[0] == 'all') {
    let money = await client.db.fetch(`money_${author.id}`)
    let bank = await client.db.fetch(`bank_${author.id}`)
    
    
    
    }
};