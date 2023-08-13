"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const node_fs_1 = require("node:fs");
class default_1 extends discord_js_1.Client {
    constructor() {
        super({
            intents: [
                'Guilds'
            ]
        });
        this.commands = new discord_js_1.Collection();
        this.commandsArray = [];
        this.command = class {
            constructor(data) {
                this.structure = data.structure;
                this.run = data.run;
            }
            ;
        };
    }
    ;
    loadModules() {
        // Commands
        for (const dir of (0, node_fs_1.readdirSync)('./dist/commands/')) {
            for (const file of (0, node_fs_1.readdirSync)('./dist/commands/' + dir)) {
                const module = require('../commands/' + dir + '/' + file).default;
                this.commands.set(module.structure.name, module);
                this.commandsArray.push(module.structure);
                console.log('Loaded new command: ' + file);
            }
            ;
        }
        ;
        // Events
        for (const dir of (0, node_fs_1.readdirSync)('./dist/events/')) {
            for (const file of (0, node_fs_1.readdirSync)('./dist/events/' + dir)) {
                require('../events/' + dir + '/' + file);
                console.log('Loaded new event: ' + file);
            }
            ;
        }
        ;
    }
    ;
    async deploy() {
        const rest = new discord_js_1.REST().setToken(process.env.CLIENT_TOKEN ?? '');
        try {
            console.log('Started loading app commands...');
            await rest.put(discord_js_1.Routes.applicationCommands(process.env.CLIENT_ID ?? ''), {
                body: this.commandsArray
            });
            console.log('Finished loading app commands.');
        }
        catch (e) {
            console.error(e);
        }
        ;
    }
    ;
    async start() {
        await this.login(process.env.CLIENT_TOKEN);
    }
    ;
}
exports.default = default_1;
;
