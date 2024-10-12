import { v4 as uuid } from 'uuid';

const time: string = new Date().toISOString();
const string: string = uuid();

setInterval(() => {
  console.log(`${time}: ${string}`);
}, 5000);