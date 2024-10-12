FROM node:alpine

WORKDIR /usr/src/app

COPY build/index.js .
COPY package.json .

RUN npm install

ENTRYPOINT [ "node", "index.js" ]