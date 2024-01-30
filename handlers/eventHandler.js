const fs = require("node:fs");
const path = require("node:path");

module.exports = {
    registerEvents(client) {
        const eventFolderPath = path.join(__dirname, "events");
        const events = fs.readdirSync(eventFolderPath).filter((file) => file.endsWith(".js"));

        for (const eventFile of events) {
            const eventPath = path.join(eventFolderPath, eventFile);
            const event = require(eventPath);

            if (event.once) {
                client.once(event.event, (...args) => event.execute(...args));
            } else {
                client.on(event.event, (...args) => event.execute(...args));
            }
        }
    },
};
