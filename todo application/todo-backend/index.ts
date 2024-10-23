import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));

let todos = ['Finish homework', 'Study for exam', 'play games with friends'];

app.get('/todos', (_req: Request, res: Response) => {
  res.json(todos);
});

app.post('/todos', (req: Request, res: Response) => {
  todos.push(req.body.todo)

  const referer = req.get('Referer');
  if (referer) {
    res.redirect(referer);
  } else {
    res.send("Error");
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});