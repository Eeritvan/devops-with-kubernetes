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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, '/image/image.jpg');
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://picsum.photos/1200');
    const arrayBuffer = yield response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    yield fs_1.default.promises.writeFile(filePath, buffer);
});
const getImageTime = () => __awaiter(void 0, void 0, void 0, function* () {
    const stats = yield fs_1.default.promises.stat(filePath);
    return stats.mtime;
});
const getCurrentTime = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Date();
});
const checkTimeDifference = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const imageTime = yield getImageTime();
        const currentTime = yield getCurrentTime();
        const diffInMilliseconds = currentTime.getTime() - imageTime.getTime();
        return diffInMilliseconds / (1000 * 60); // minutes
    }
    catch (e) {
        return Infinity;
    }
});
fetchData();
setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
    if ((yield checkTimeDifference()) > 60)
        fetchData();
}), 60 * 60 * 1000);
