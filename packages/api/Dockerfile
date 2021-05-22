FROM node:10.24-alpine

RUN apk add --no-cache tini

ENTRYPOINT ["/sbin/tini", "--"]

WORKDIR /usr

COPY packages/api ./packages/api
COPY packages/database ./packages/database
COPY package.json .
COPY tsconfig.json .

RUN yarn --ignore-scripts

WORKDIR /usr/packages/api

RUN yarn --cwd ../database generate:client

CMD [ "yarn", "start:production" ]