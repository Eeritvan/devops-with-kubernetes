import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const backend = process.env.BACKEND;

app.use('/image', express.static('image'));

app.get('/', async (_req: Request, res: Response) => {
  let todoListItems = ''; 
  try {
    const listData = await fetch(`${backend}`);
    const parsedData = await  listData.json();
    todoListItems = parsedData.map((todo: string) => `<li>${todo}</li>`).join('');
  } catch (e) {
    console.error(e);
  }

  res.send(`<div>
              <div>
                <img src="../image/image.jpg" style="width: 400px;">
              </div>
              <form action="/todos" method="POST">
                <input name="todo"/>
                <Button type="submit"> Create TODO </Button>
              </form>
              <ul>
                ${todoListItems}
              </ul>
            </div>
  `);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});