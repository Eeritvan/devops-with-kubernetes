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
const filePath = path_1.default.join(__dirname, "/stamps/stamps.txt");
const readLastRow = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield promises_1.default.readFile(filePath, 'utf8');
        const lines = data.trim().split('\n');
        return lines[lines.length - 1];
    }
    catch (err) {
        return 'error occurred';
    }
});
app.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(`${yield readLastRow()}`);
}));
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
