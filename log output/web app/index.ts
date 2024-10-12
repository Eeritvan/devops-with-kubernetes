import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import fs from 'node:fs/promises';
import path from 'path';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const filePath = path.join(__dirname, "/stamps/stamps.txt");

const readLastRow = async () => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');
    return lines[lines.length - 1];
  } catch (err) {
    return 'error occurred';
  }
};

app.get('/', async (_req: Request, res: Response) => {
  res.send(`${await readLastRow()}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});