FROM node:lts

ENV HOST=127.0.0.1
ENV PORT=3000

EXPOSE 3000

COPY . /app/

WORKDIR /app

RUN npm install -g pnpm

RUN pnpm install

RUN pnpm build

WORKDIR /app/packages/graphql

CMD npm run start:prod