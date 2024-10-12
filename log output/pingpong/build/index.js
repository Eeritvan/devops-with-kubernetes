"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
let count = 0;
app.get('/pingpong', (_req, res) => {
    count++;
    res.send(`pong ${count}`);
});
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
