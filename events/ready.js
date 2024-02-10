const { ActivityType, Events } = require("discord.js");

module.exports = {
    event: Events.ClientReady,
    once: true,
    execute(client) {
        client.user.setActivity({ name: "any command(s)", type: ActivityType.Listening });
        console.log(`${client.user.tag} has successfully logged in.`);
    },
};
