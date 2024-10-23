import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import fs from 'node:fs/promises';
import path from 'path';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const hashFilePath = path.join(__dirname, "../stamps/stamps.txt");

const readLastRow = async () => {
  try {
    const data = await fs.readFile(hashFilePath, 'utf8');
    const lines = data.trim().split('\n');
    return lines[lines.length - 1];
  } catch (err) {
    return 'error occurred';
  }
};

const getPongs = async () => {
  try {
    const response = await fetch("http://localhost:3001/pingpong");
    const data = await response.json();
    return data.pongs;
  } catch (err) {
    return 0;
  }
};

app.get('/', async (_req: Request, res: Response) => {
  const lastRow: string = await readLastRow(); 
  const pongs: Number = await getPongs();
  res.send(`${lastRow}<br> Ping / Pongs: ${pongs}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});