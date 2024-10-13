import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use('/image', express.static('image'));

app.get('/', (_req: Request, res: Response) => {
  res.send(`<img src="/image/image.jpg" style="width: 400px;">`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});