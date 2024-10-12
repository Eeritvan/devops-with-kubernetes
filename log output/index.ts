import { v4 as uuid } from 'uuid';
import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const time: string = new Date().toISOString();
const string: string = uuid();

app.get('/', (_req: Request, res: Response) => {
  res.send(`${time}: ${string}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});