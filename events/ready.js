const { Events } = require("discord.js");

module.exports = {
    event: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`${client.user.tag} has successfully logged in.`);
    },
};
