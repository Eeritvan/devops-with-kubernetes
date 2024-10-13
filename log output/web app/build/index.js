"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const promises_1 = __importDefault(require("node:fs/promises"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const hashFilePath = path_1.default.join(__dirname, "/stamps/stamps.txt");
const pongFilePath = path_1.default.join(__dirname, "/pongs/pongs.txt");
const readLastRow = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield promises_1.default.readFile(hashFilePath, 'utf8');
        const lines = data.trim().split('\n');
        return lines[lines.length - 1];
    }
    catch (err) {
        return 'error occurred';
    }
});
const readPongs = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield promises_1.default.readFile(pongFilePath, 'utf8');
        const lines = data.trim().split('\n');
        return Number(lines[lines.length - 1]);
    }
    catch (err) {
        return 0;
    }
});
app.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const lastRow = yield readLastRow();
    const pongs = yield readPongs();
    res.send(`${lastRow}<br> Ping / Pongs: ${pongs}`);
}));
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
