import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import fs from 'node:fs/promises';
import path from 'path';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const hashFilePath = path.join(__dirname, "/stamps/stamps.txt");
const pongFilePath = path.join(__dirname, "/pongs/pongs.txt");

const readLastRow = async () => {
  try {
    const data = await fs.readFile(hashFilePath, 'utf8');
    const lines = data.trim().split('\n');
    return lines[lines.length - 1];
  } catch (err) {
    return 'error occurred';
  }
};

const readPongs = async () => {
  try {
    const data = await fs.readFile(pongFilePath, 'utf8');
    const lines = data.trim().split('\n');
    return Number(lines[lines.length - 1]);
  } catch (err) {
    return 0;
  }
};

app.get('/', async (_req: Request, res: Response) => {
  const lastRow: string = await readLastRow(); 
  const pongs: Number = await readPongs();
  res.send(`${lastRow}<br> Ping / Pongs: ${pongs}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});