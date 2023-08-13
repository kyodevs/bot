"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
__1.client.once('ready', () => {
    console.log('Logged in as: ' + __1.client.user?.tag);
});
