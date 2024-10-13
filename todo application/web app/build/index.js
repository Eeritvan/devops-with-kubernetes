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
app.use('/image', express_1.default.static('image'));
app.get('/', (_req, res) => {
    res.send(`<img src="/image/image.jpg" style="width: 400px;">`);
});
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
