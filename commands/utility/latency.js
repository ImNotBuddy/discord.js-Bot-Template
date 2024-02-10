const { Interaction, SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName("latency").setDescription("View the bots latency"),
    /**
     *
     * @param {Interaction} interaction
     */
    async execute(interaction) {
        await interaction.deferReply();
        const reply = await interaction.fetchReply();
        const latency = reply.createdTimestamp - interaction.createdTimestamp;

        const client = interaction.client;

        await interaction.editReply(`\nClient latency (ping): ${latency}ms\nWebsocket ping: ${client.ws.ping}ms`);
    },
};
