FROM node:12.8-alpine

WORKDIR /app

COPY . .

RUN yarn

CMD [ "node", "/app/build/index.js", "--max-old-space-size", "1024" ]