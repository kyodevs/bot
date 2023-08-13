import { client } from "../..";
import { SlashCommandBuilder } from 'discord.js';

export default new client.command({
    structure: new SlashCommandBuilder()
        .setName('getkey')
        .setDescription('Get your key for Kaos'),
    run: async (client, interaction) => {

        await interaction.reply({
            content: 'https://workink.net/1QH2/ll4lkuh5'
        });

    }
});