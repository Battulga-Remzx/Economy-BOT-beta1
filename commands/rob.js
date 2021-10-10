const { MessageEmbed } = require("discord.js")

exports.execute = async (client, message, args) => {

  let user = message.mentions.members.first()
    let targetuser = await client.db.fetch(`money_${user.id}`) // fetch mentioned users balance
    let author = await client.db.fetch(`money_${message.author.id}`) // fetch authors balance


    if (!user) {
        return message.channel.send('дээрэмдэх хүнээ сонгоно уу!')
    }
    if (author < 50000) { // if the authors balance is less than 250, return this.
        return message.channel.send(':x: You need atleast 250$ to rob somebody.')
    }

    if (targetuser < 0) { // if mentioned user has 0 or less, it will return this.
        return message.channel.send(`:x: ${user.user.username}-д хэтэрхий бага мөнгөтэй болсон байна`)
    }


    let random = Math.floor(Math.random() * 5000) + 1; // random number 200-1, you can change 200 to whatever you'd like


    let embed = new MessageEmbed()
    .setDescription(`${message.author} you robbed ${user} and got away with ${random}!`)
    .setColor("GREEN")
    .setTimestamp()
    message.channel.send(embed)


    client.db.subtract(`money_${user.id}`, random)
    client.db.add(`money_${message.author.id}`, random)
}

exports.help = {
  name: "rob",
  aliases: [],
  usage: `rob <member>`
};