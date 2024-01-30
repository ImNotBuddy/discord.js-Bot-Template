const fs = require("node:fs");
const path = require("node:path");

module.exports = {
    registerCommands(client) {
        const foldersPath = path.join(__dirname, "commands");
        const commandFolders = fs.readdirSync(foldersPath);

        for (const folder of commandFolders) {
            const commandFolderPath = path.join(foldersPath, folder);
            const commandFiles = fs.readdirSync(commandFolderPath).filter((file) => file.endsWith(".js"));

            for (const file of commandFiles) {
                const filePath = path.join(commandFolderPath, file);
                const command = require(filePath);

                if ("data" in command && "execute" in command) {
                    client.Commands.set(command.data.name, command);
                } else {
                    console.log(
                        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
                    );
                }
            }
        }
    },
};
