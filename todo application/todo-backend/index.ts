import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import { Client } from 'pg';

dotenv.config();

const port = process.env.PORT;
const app: Express = express();
let client = new Client();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (_req: Request, res: Response) => {
  res.status(200).send('healthy');
});

app.get('/todos', async (_req: Request, res: Response) => {
  try {
    const result = await client.query(`SELECT id, task, done FROM todos;`);
    console.log("Loaded todos")
    res.json(result.rows);
  } catch (e) {
    console.error(e);
  }
});

app.post('/todos', async (req: Request, res: Response) => {
  try {
    const referer = req.get('Referer')!;
    await client.query('INSERT INTO todos(task) VALUES ($1)', [req.body.todo]);
    console.log(`Posted new todo: ${req.body.todo}`)
    res.redirect(referer);
  } catch (e) {
    console.error(e);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/todos/:id', async (req: Request, res: Response) => {
  try {
    const referer = req.get('Referer')!;
    await client.query(`UPDATE todos SET done = true WHERE id = $1`, [req.params.id]);
    console.log(`Todo updated`)
    res.redirect(referer);
  } catch (e) {
    console.error(e);
    res.status(500).send('Internal Server Error');
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