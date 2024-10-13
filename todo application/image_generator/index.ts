import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, '/image/image.jpg');

const fetchData = async () => {
  const response: Response = await fetch('https://picsum.photos/1200');
  const arrayBuffer: ArrayBuffer = await response.arrayBuffer();
  const buffer: Buffer = Buffer.from(arrayBuffer);
  await fs.promises.writeFile(filePath, buffer);
}

const getImageTime = async () => {
  const stats = await fs.promises.stat(filePath);
  return stats.mtime;
}

const getCurrentTime = async () => {
  return new Date();
}

const checkTimeDifference = async () => {
  try {
    const imageTime: Date = await getImageTime();
    const currentTime: Date = await getCurrentTime();
    const diffInMilliseconds = currentTime.getTime() - imageTime.getTime();
    return diffInMilliseconds / (1000 * 60); // minutes
  } catch (e) {
    return Infinity;
  }
}

fetchData();
setInterval(async () => {
  if (await checkTimeDifference() > 60)
    fetchData();
}, 60 * 60 * 1000);