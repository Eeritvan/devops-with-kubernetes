import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import fs from 'node:fs/promises';
import path from 'path';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const pongFilePath = path.join(__dirname, "/pongs/pongs.txt");

const readPongs = async () => {
  try {    
    let count = Number(await fs.readFile(pongFilePath, 'utf8'));
    count++;
    await fs.writeFile(pongFilePath, count.toString(), 'utf8');
    return Number(count);
  } catch (err) {
    await fs.writeFile(pongFilePath, (0).toString(), 'utf8');
    return 0;
  }
};

app.get('/pingpong', async (_req: Request, res: Response) => {
  res.send(`pong ${await readPongs()}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});