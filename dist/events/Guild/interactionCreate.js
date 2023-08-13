"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
__1.client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand())
        return;
    const command = __1.client.commands.get(interaction.commandName);
    if (!command)
        return;
    try {
        command?.run(__1.client, interaction);
    }
    catch (err) {
        console.error(err);
    }
    ;
});
