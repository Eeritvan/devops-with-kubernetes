import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import { Client } from 'pg';

dotenv.config();

const port = process.env.PORT;
const app: Express = express();
const client = new Client();

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('healthy');
});

app.get('/pingpong', async (_req: Request, res: Response) => {
  const result = await client.query('UPDATE pings SET count = count + 1 WHERE id=1 RETURNING count;');
  const pongs = result.rows[0].count;
  res.json({ pongs });
});

app.listen(port, async () => {
  await client.connect();
  console.log(`App listening on port ${port}`);
});