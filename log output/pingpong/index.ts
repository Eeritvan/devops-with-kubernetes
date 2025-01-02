import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import { Client } from 'pg';

dotenv.config();

const port = process.env.APP_PORT;
const app: Express = express();
let client = new Client();

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('healthy');
});

app.get('/pingpong', async (_req: Request, res: Response) => {
  try {
    const result = await client.query('UPDATE pings SET count = count + 1 WHERE id=1 RETURNING count;');
    const pongs = result.rows[0].count;
    res.json({ pongs });
  } catch (error) {
    res.status(500).send('not healthy');
  }
});

app.get('/health', async (_req: Request, res: Response) => {
  try {
    await client.query('SELECT 1');
    res.status(200).send('healthy');
  } catch (error) {
    res.status(500).send('not healthy - query failed');
  }
});

const connectWithRetry = async () => {
  try {
    await client.connect();
  } catch (error) {
    await client.end().catch(console.error);
    client = new Client();
    setTimeout(connectWithRetry, 15000);
  }
};

app.listen(port, async () => {
  connectWithRetry();
  console.log(`App listening on port ${port}`);
});