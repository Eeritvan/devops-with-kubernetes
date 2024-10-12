import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (_req: Request, res: Response) => {
  res.send(`Server started in port ${port}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});