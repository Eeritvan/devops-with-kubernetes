FROM alpine:latest

WORKDIR /usr/src/app

RUN apk add curl

COPY . .

RUN chmod +x dailytodo.sh

CMD ["sh", "dailytodo.sh"]