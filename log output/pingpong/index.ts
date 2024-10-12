import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
let count = 0;

app.get('/pingpong', (_req: Request, res: Response) => {
  count++;
  res.send(`pong ${count}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});