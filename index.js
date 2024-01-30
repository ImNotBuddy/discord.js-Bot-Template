const { Client, Collection, GatewayIntentBits } = require("discord.js");
const { registerCommands } = require("./handlers/commandHandler");
const { registerEvents } = require("./handlers/eventHandler");
require("dotenv").config();

const intents = [GatewayIntentBits.Guilds];

const client = new Client({ intents: intents });
client.Commands = new Collection();

registerCommands(client);
registerEvents(client);

client.login(process.env.DISCORD_TOKEN);
