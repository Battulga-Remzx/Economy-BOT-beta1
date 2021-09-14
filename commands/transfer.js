exports.execute = async (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
  let authordata = client.eco.fetchMoney(message.author.id) 
  if (!member) return message.channel.send('Шилжүүлэгэ хийх хүн ээ сонгоно уу!') 
  let amount = args[1]
  if (!amount || isNaN(amount)) return message.channel.send('Мөнгөн дүнгээ оруулна уу!') 
  if(authordata.amount < amount) return message.channel.send('Дансан дахь үлдэгдэл хүрэлцэхгүй байна') 
  await client.eco.transfer(message.author.id, member.id, amount) 
  return message.channel.send(`Шилжүүлэгэ амжилттай боллоо 💸**${amount}** ыг ** ${member.user.tag}**-руу.`)
}
exports.help = {
  name: "transfer",
  aliases: ['give', 'share'],
  usage: `transfer <member> <amount>`
};
