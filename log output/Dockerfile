FROM node:alpine

WORKDIR /usr/src/app

COPY build/index.js .
COPY package.json .

RUN npm install

ENV PORT=3000

EXPOSE 3000

ENTRYPOINT [ "node", "index.js" ]