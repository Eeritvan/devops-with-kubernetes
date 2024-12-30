import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

interface Todo {
  id: string;
  task: string;
  done: boolean;
}

const app: Express = express();
const port = process.env.PORT;
const backend = process.env.BACKEND;
const basePath = process.env.NODE_ENV === 'staging' ? '/staging' : '';

app.use('/image', express.static('image'));

app.get(`${basePath}/`, async (_req: Request, res: Response) => {
  let todoListItems = ''; 
  try {
    const listData = await fetch(`${backend}`);
    const parsedData: Todo[] = await listData.json();
    todoListItems = parsedData.map((todo: Todo) => `
      <li>
        <form action="${basePath}/todos/${todo.id}" method="POST">
          ${todo.task}
          ${!todo.done ? `
            <button type="submit">
              done
            </button>
          ` : ''}
        </form>
      </li>
    `).join('');
  } catch (e) {
    console.error(e);
  }

  res.send(`<div>
              <div>
                <img src="../image/image.jpg" style="width: 400px;">
              </div>
              <form action="${basePath}/todos" method="POST">
                <input name="todo"/>
                <Button type="submit"> Create TODO </Button>
              </form>
              <ul>
                ${todoListItems}
              </ul>
            </div>
  `);
});

app.get(`${basePath}/health`, async (_req: Request, res: Response) => {
  try {
    await fetch(`${backend}`);
    res.status(200).send('healthy');
  } catch (error) {
    res.status(500).send('not healthy');
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
