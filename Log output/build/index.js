"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const time = new Date().toISOString();
const string = (0, uuid_1.v4)();
setInterval(() => {
    console.log(`${time}: ${string}`);
}, 5000);
