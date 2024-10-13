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
    res.send(`<div>
              <div>
                <img src="/image/image.jpg" style="width: 400px;">
              </div>
              <div>
                <input> </input>
                <Button> Create TODO </Button>
              </div>
              <ul>
                <li> TODO 1 </li>
                <li> TODO 2 </li>
              </ul>
            </div>
  `);
});
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
