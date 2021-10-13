const Discord = require("discord.js");
const client = new Discord.Client({ disableMentions: "everyone" });
const Eco = require("quick.eco");
client.eco = new Eco.Manager(); // quick.eco
client.db = Eco.db; // quick.db
client.config = require("./botConfig");

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.cooldowns = new Discord.Collection();
//Дэлгүүр
client.shop = {
  zairmag: {
    cost: 3000,
    scost: -2000
  },
  us: {
    cost: 5000
  },
  hool: {
    cost: 10000
  },
  laptop: {
    cost: 1000000
  },
  samsungs20: {
    cost: 1000000
  },
  pc: {
    cost: 600000
  },
  iphonex: {
    cost: 1500000
  },
  prius20: {
    cost: 3000000
  },
  ferrari: {
    cost: 20000000
  }
};
client.home = {
  mongol_ger: {
    cost: 1000000
  },
  house: {
    cost: 7000000
  }
};

const fs = require("fs");

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(f => {
    if (!f.endsWith(".js")) return;
    const event = require(`./events/${f}`);
    let eventName = f.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(f => {
    if (!f.endsWith(".js")) return;
    let command = require(`./commands/${f}`);
    client.commands.set(command.help.name, command);
    command.help.aliases.forEach(alias => {
      client.aliases.set(alias, command.help.name);
    });
  });
});
exports.keepAlive = (client, Message, Args) => {
  const keepAlive = require("./server.js");
  keepAlive();
};

client.login(client.config.token);
