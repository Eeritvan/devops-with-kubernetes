"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const time = new Date().toISOString();
const string = (0, uuid_1.v4)();
app.get('/', (_req, res) => {
    res.send(`${time}: ${string}`);
});
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
