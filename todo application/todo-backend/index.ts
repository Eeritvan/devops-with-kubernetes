import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import { Client } from 'pg';

dotenv.config();

const port = process.env.PORT;
const app: Express = express();
const client = new Client();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (_req: Request, res: Response) => {
  res.status(200).send('healthy');
});


app.get('/todos', async (_req: Request, res: Response) => {
  try {
    const result = await client.query(`SELECT task FROM todos;`);
    const tasks = result.rows.map(row => row.task);
    res.json(tasks);
  } catch (e) {
    console.error(e);
  }
});

app.post('/todos', async (req: Request, res: Response) => {
  try {
    const referer = req.get('Referer');
    if (referer) {
      await client.query(`INSERT INTO todos(task) VALUES ('${req.body.todo}');`);
      res.redirect(referer);
    } else {
      res.status(500).send('Internal Server Error');
    }
  } catch (e) {
    console.error(e);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, async () => {
  await client.connect();
  console.log(`App listening on port ${port}`);
});