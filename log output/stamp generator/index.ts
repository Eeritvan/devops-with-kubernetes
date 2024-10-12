import { v4 as uuid } from 'uuid';
import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, "/stamps/stamps.txt");

setInterval(() => {
  const time: string = new Date().toISOString();
  const string: string = uuid();

  const content = `${time}: ${string}\n`;

  fs.appendFile(filePath, content, (err) => {
    if (err)
      console.error('Error writing to file', err);
  })
}, 5000);