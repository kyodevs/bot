"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const discord_js_1 = require("discord.js");
exports.default = new __1.client.command({
    structure: new discord_js_1.SlashCommandBuilder()
        .setName('getkey')
        .setDescription('Get your key for Kaos'),
    run: async (client, interaction) => {
        await interaction.reply({
            content: 'https://workink.net/1QH2/ll4lkuh5'
        });
    }
});
