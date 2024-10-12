"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, "/stamps/stamps.txt");
setInterval(() => {
    const time = new Date().toISOString();
    const string = (0, uuid_1.v4)();
    const content = `${time}: ${string}\n`;
    fs_1.default.appendFile(filePath, content, (err) => {
        if (err)
            console.error('Error writing to file', err);
    });
}, 5000);
