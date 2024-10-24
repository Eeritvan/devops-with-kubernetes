import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import fs from 'node:fs/promises';
import path from 'path';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const message = process.env.MESSAGE;

const hashFilePath = path.join(__dirname, "../stamps/stamps.txt");
const configFilePath = path.join(__dirname, "../config/information.txt");

const readLastRow = async (path: string) => {
  try {
    const data = await fs.readFile(path, 'utf8');
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
  const stamp: string = await readLastRow(hashFilePath); 
  const configFileContent: string = await readLastRow(configFilePath); 
  const pongs: Number = await getPongs();
  res.send(`file content: ${configFileContent} <br>
            env variable: MESSAGE=${message} <br>
            ${stamp} <br>
            Ping / Pongs: ${pongs}
          `);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});