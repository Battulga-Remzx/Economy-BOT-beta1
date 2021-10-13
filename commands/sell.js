const { MessageEmbed } = require("discord.js")

exports.execute = async (client, message , args) => {

  let user = message.author;

        if (args.join(' ').toLocaleLowerCase() == 'items') {
            let embed1 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`❌ You don't have Nikes to sell`);

            let items = await client.db.fetch(`nikes_${user.id}`)

            if (items < 1) return message.channel.send(embed1)

            client.db.fetch(`nikes_${user.id}`)
            client.db.subtract(`nikes_${user.id}`, 1)
        }
}