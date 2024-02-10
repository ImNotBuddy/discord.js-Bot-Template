const { Interaction, SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName("template").setDescription("Template for a command"),
    /**
     *
     * @param {Interaction} interaction
     */
    async execute(interaction) {
        await interaction.reply("Template.");
    },
};
