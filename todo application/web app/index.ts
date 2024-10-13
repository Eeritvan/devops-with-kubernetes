import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use('/image', express.static('image'));

app.get('/', (_req: Request, res: Response) => {
  res.send(`<div>
              <div>
                <img src="/image/image.jpg" style="width: 400px;">
              </div>
              <div>
                <input> </input>
                <Button> Create TODO </Button>
              </div>
              <ul>
                <li> TODO 1 </li>
                <li> TODO 2 </li>
              </ul>
            </div>
  `);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});