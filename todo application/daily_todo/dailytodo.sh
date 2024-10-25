#!/bin/sh

WIKI_URL=$(curl -sI https://en.wikipedia.org/wiki/Special:Random | grep -i location | tr -d '\r' | cut -d' ' -f2)

curl -X POST -H "Content-Type: application/json" -H "Referer: $REFERER_URL" -d "{\"todo\": \"$WIKI_URL\"}" $TARGET_URL