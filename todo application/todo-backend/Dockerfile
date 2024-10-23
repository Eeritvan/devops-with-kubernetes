FROM node:alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install && npm run tsc

CMD [ "node", "build/index.js" ]